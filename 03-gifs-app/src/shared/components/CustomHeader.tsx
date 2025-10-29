
interface Props {

    tittle: String,
    description?: String

}


export const CustomHeader = ({ tittle, description }: Props) => {
    return (
        <div className="content-center">
            <h1>{tittle}</h1>
            {
                description && (
                    <p>{description}</p>
                )
            }

        </div>
    )
}
