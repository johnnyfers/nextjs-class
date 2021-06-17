import MeetupDetail from "../../components/meetups/MeetupDetail"

export default function MeetupDetailsPage(props) {
    return (
        <>
            <MeetupDetail
                image='https://mamalovesrome.com/wp-content/uploads/2021/05/Vatican-City-St-Peter-basilica-DP.jpg'
                title='A first meetup'
                address='Some street'
                description='A description'
            />
        </>
    )
}

export async function getStaticPaths(){
    return {
        fallback: false,
        paths:[
            {
                params: {
                    meetupId: 'm1'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const { meetupId } = context.params

    return {
        props: {
            meetupData: {
                id: meetupId,
                image: 'https://mamalovesrome.com/wp-content/uploads/2021/05/Vatican-City-St-Peter-basilica-DP.jpg',
                title: 'A first meetup',
                address: 'Some street',
                description: 'A description'
            }
        }
    }
}