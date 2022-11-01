import { expect, test } from 'vitest'
import { Person } from './person'

test('should create a person', () => {
    const person = new Person({
        name: 'Erickson'
    })

    expect(person).toBeInstanceOf(Person)
    expect(person.name).toEqual('Erickson')
})