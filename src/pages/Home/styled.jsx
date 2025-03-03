import styled from 'styled-components';

export const InputControll = styled.div`
    input{
        height: 35px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        outline: 0;
        border: 0;
        font-size: 18px;
    }
`

export const ResultContent = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 20px;

    img{
        width: 120px;
        height: 120px;
        border: 5px solid #686868;
    }

    .rightContent{
        display: flex;
        flex-direction: row;
        gap: 30px;
    }

    .rightContent .infoContent h3{
        margin-bottom: 5px;
    }

    @media(max-width: 510px){
        flex-direction: column;

        .rightContent{
            flex-direction: column;
        }
    }
`
