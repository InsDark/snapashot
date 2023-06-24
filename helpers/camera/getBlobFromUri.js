export const getBlobFromUri = async (uri) => {
    try {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", uri);
            xhr.responseType = "blob";
            xhr.addEventListener('load', function () {
                resolve(xhr.response);
            });
            xhr.send();
        });

        return blob;
    } catch (e) {
        alert(error)
    }
}