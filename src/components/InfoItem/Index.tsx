import * as C from './Styles';

type Props = {
    label: string,
    value: string
}

export const Infoitem = ({ label, value }: Props) => {
    return (
        <C.Container>
            <C.Label>{label}</C.Label>
            <C.Value>{value}</C.Value>
        </C.Container>
    );
}