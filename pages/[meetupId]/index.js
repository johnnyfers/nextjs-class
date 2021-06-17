import MeetupDetail from "../../components/meetups/MeetupDetail"

import { MongoClient, ObjectId } from 'mongodb'

export default function MeetupDetailsPage(props) {
    return (
        <>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </>
    )
}

export async function getStaticPaths(){

    const client = await MongoClient.connect('mongodb+srv://userlogin:userlogin@cluster0000.h0feh.mongodb.net/meetups?retryWrites=true&w=majority')

    const db = client.db();

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray()

    client.close()

    return {
        fallback: false,
        paths: meetups.map((meetup)=> ({params: {meetupId: meetup._id.toString()}}))
    }
}

export async function getStaticProps(context) {
    const { meetupId } = context.params

    const client = await MongoClient.connect('mongodb+srv://userlogin:userlogin@cluster0000.h0feh.mongodb.net/meetups?retryWrites=true&w=majority')

    const db = client.db();

    const meetupsCollection = db.collection('meetups')

    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)})

    client.close()

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}