import { MAIN_ENDPOINT } from "../constants"
import{ Media } from "../types"

export const fetchMedia = async (): Promise<Media[]> => {
    // fetch data from endpoint
    const data = await fetch(MAIN_ENDPOINT);
    // parse JSON
    const jsonData = await data.json();
    // assign type to media before returning
    const media: Media[] = jsonData.media

    return media
}