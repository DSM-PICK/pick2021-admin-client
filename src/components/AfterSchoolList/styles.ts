import styled from '@emotion/styled'
import { color } from '../../style/color'

export const AfterSchoolListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const AfterSchoolList = styled.div`
    height: 70vh;
    overflow: auto;
    display: grid;
    grid-template-columns: 392px 392px 392px 392px;
    @media screen and (max-width: 1600px) { 
        grid-template-columns: 392px 392px 392px;
    }
    @media screen and (max-width: 1340px) { 
        grid-template-columns: 392px 392px;
    }
    a {
        text-decoration: none;
    }
`