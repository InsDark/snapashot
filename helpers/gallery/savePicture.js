import { createAlbumAsync, createAssetAsync } from 'expo-media-library'
import uuid from 'react-native-uuid'
import { ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../firebase'
import { getItemAsync } from 'expo-secure-store'

export const savePicture = async ({ photoUri, albumName }) => {
  try {
    const asset = await createAssetAsync(photoUri)
    await createAlbumAsync(albumName, asset, false)
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
    const userPictures = ref(storage, `${userEmail}/${albumName}/${imgName}`)
    getFileBlob(newPhoto.uri, blob => {
      uploadBytes(userPictures, blob)
    })
    return { type: "success", msg: "The picture was snapped" }

  }
  catch (err) {
    return { type: "error", msg: err.msg }
  }
}