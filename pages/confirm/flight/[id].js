

const FlightBookConfirmationPage = () => {

}

export const getServerSideProps = async (context) => {
    const { id } = context.params;
    const session = await getSession({ req: context.req });

    if (!session || !session.currentUser) {
        return {
            redirect: {
                destination: '/guest',
            }
        };
    }

    const client = buildClient(context);

    const response = await client.get('book/' + id);

    const { flight } = response.data;

    return {
        props: {
            session,
            flight,
        }
    }
}

export default FlightBookConfirmationPage;