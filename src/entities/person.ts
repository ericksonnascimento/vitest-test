export interface PersonProps {
    name: string
}

export class Person {
    private props: PersonProps

    get name() {
        return this.props.name
    }

    constructor(props: PersonProps) {
        this.props = props
    }
}