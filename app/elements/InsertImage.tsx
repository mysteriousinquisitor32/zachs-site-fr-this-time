

export default function img(imageurl: { imageurl: string }) {
    return (
        <img src={"../public/" + imageurl}></img>
    )
}