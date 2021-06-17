import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import {useRouter} from 'next/router'

export default function NewMeetUp() {
    const router = useRouter()

    function addMeetupHandler(enteredData) {
        fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        router.push('/')
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}