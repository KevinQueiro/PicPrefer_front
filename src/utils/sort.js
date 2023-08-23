export const sort = (photos) => {
    photos.sort((a, b) => b.prefered - a.prefered);
    return photos
}