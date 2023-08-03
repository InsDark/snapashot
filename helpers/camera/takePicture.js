import {  createAlbumAsync, createAssetAsync } from 'expo-media-library'
import uuid from 'react-native-uuid'
import { ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../firebase'
import { getItemAsync } from 'expo-secure-store'

export const takePicture = async ({camera, gallerySection, gallerySections}) => {
    if(gallerySection === '') {
      return {type: "error", msg: 'Select and album first'}
    }
    try {

      let options = {
        quality: 1,
        base64: true,
        exif: false
      }

      const newPhoto = await camera.current.takePictureAsync(options)
      const asset = await createAssetAsync(newPhoto.uri)
      await createAlbumAsync(gallerySections[gallerySection], asset, false)
      const { userEmail } = JSON.parse(await getItemAsync('auth'))

      const getFileBlob = function (url, cb) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.addEventListener('load', function () {
          cb(xhr.response);
        });
        xhr.send();
      };

      const imgName = uuid.v4()
      const userPictures = ref(storage, `${userEmail}/${gallerySection}/${imgName}`)
      getFileBlob(newPhoto.uri, blob => {
        uploadBytes(userPictures, blob)
      })
      return {type: "success", msg: "The picture was snapped"}
      
    }
    catch (err) {
      return {type: "error", msg: err.msg}
    }
  }