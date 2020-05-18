import axios from 'axios'

export const createTrip = () => async(dispatch) => {
    body = {
        name: 'Viagem para Marte',
        planet: 'Marte',
        date: '01/01/',
        description: '',
        durationInDays: ''
    }
    
    await axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureX/bruno-hamilton/trips', body, {
        headers: {
            'Content-Type': 'application/json',
            'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMxNDc5NDV9.cTNMopD35hMpOo34LhvFmmZJmUCrFUQdFECJnG7EvL4'
        }
    }).then((response) => {
        alert('Viagem criada com sucesso!')
        
    }).catch((error) => {
        alert('Ocorreu um erro.')
    })
}