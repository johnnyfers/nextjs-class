import MeetupList from '../components/meetups/MeetupList'
const dummyMeetups = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: 'https://mamalovesrome.com/wp-content/uploads/2021/05/Vatican-City-St-Peter-basilica-DP.jpg',
        address: 'some address',
        description: 'my description'
    },
    {
        id: 'm2',
        title: 'A first Meetup',
        image: 'https://mamalovesrome.com/wp-content/uploads/2021/05/Vatican-City-St-Peter-basilica-DP.jpg',
        address: 'some address',
        description: 'my description'
    }
]

export default function HomePage(props) {

    return(
            <MeetupList meetups={props.meetups}/>
    )
}

/* export async function getServerSideProps(){
    return {
        props:{
            meetups: dummyMeetups
        }
    }
}
 */

export async function getStaticProps(){
    return {
        props: {
            meetups: dummyMeetups
        },
        revalidate: 1
    }
}
