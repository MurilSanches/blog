import styled from 'styled-components'
import { colors } from 'helpers/colors'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;

    height: 100vh;
    width: 100vw;

    background-color: ${colors.darkPurple};
    color: ${colors.floralWhite};
`

export const Content = styled.div`
    padding: 100px;


    border: 1px solid ${colors.floralWhite};
    box-shadow: 10px 10px 100px ${colors.darkPurpleShadow};
`