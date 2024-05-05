export interface UserModel {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: number,
    username: string,
    password: string,
    birthDate: number,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: {
        color: string,
        type: string
    },
    domain: string,
    ip: number,
    address: {
        address: string,
        city: string,
        coordinates: {
            lat: string,
            lng: string
        },
        postalCode: number,
        state: string
    },
    macAddress: string,
    university: string,
    bank: {
        cardExpire: number,
        cardNumber: number,
        cardType: string,
        currency: string,
        iban: string
    },
    company: {
        address: {
            address: string,
            city: string,
            coordinates: {
                lat: number,
                lng: number
            },
            postalCode: number,
            state: string
        },
        department: string,
        name: string,
        title: string
    },
    ein: number,
    ssn: number,
    userAgent: string

}