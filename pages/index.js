import MeetupList from '../components/meetups/MeetupList'

import { MongoClient } from 'mongodb'

export default function HomePage(props) {

    return (
        <MeetupList meetups={props.meetups} />
    )
}

export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://userlogin:userlogin@cluster0000.h0feh.mongodb.net/meetups?retryWrites=true&w=majority')

    const db = client.db();

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find().toArray()

    client.close()

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

/* export async function getServerSideProps(){
    return {
        props:{
            meetups: dummyMeetups
        }
    }
}
 */