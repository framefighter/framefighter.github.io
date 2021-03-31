import { LoadedImage } from './App';

export function capitalizeSite(str: string): string {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}


export function getImagePath(match_path: string, img: LoadedImage) {
    return [
        match_path, "image", img.filename
    ].join("/")
}

export function findImage(images: LoadedImage[], filename: string): [LoadedImage, number] | null {
    let num = images.findIndex(i => i.filename === filename)
    if (num < 0) return null
    return [images[num], num]
}