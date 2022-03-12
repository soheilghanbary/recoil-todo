import tw from 'twin.macro'
export default ({ children }) => {
    return (
        <div tw='max-w-screen-lg my-5 mx-auto'>
            {children}
        </div>
    )
}