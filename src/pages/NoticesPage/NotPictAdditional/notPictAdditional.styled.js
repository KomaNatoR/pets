import styled from "@emotion/styled";

export const TypeStyled = styled.p`
    position: absolute;
    top: 16px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    width: 126px;
    height: 32px;
    padding: 0;
    margin: 0;
    border-radius: 0px 16px 16px 0px;

    text-align: center;

    color: ${({ theme }) => theme.colors.pureBlack};
    background: ${({ theme }) => theme.colors.lightBlue};
`;

export const HeartStyled = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 0;

    border: none;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.lightBlue};

@media (min-width: 1280px) {
    cursor: pointer;

    svg {
        transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
        fill 1500ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    :hover, :focus {

        svg {
            transform: scale(1.3);
            fill: ${({ theme }) => theme.colors.blue};
            transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
            fill 500ms cubic-bezier(0.4, 0, 0.2, 1);
        }
    }
}
`;

export const DeleteStyled = styled.button`
    position: absolute;
    top: 68px;
    right: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 0;

    border: none;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.lightBlue};

@media (min-width: 1280px) {
    cursor: pointer;

    svg {
        transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke 1500ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    :hover, :focus {

        svg {
            transform: scale(1.3);
            stroke: ${({ theme }) => theme.colors.red};
            transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
            fill 500ms cubic-bezier(0.4, 0, 0.2, 1);
        }
    }
}
`;

export const InformListStyled = styled.ul`
    list-style: none;

    position: absolute;
    top: 248px;
    left: 8px;

    display: flex;
    gap: 12px;
    padding: 0;
    margin-left: auto;
    margin-right: auto;

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        width: 80px;
        height: 28px;

        border-radius: 16px;
        color: ${({ theme }) => theme.colors.pureBlack};
        background: ${({ theme }) => theme.colors.lightBlue};

        svg {flex-shrink: 0;}
        p {
            // display: flex;
            // justify-content: center;
            // align-items: center;
            margin: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            font-weight: 600;
            font-size: 12px;
            line-height: calc(16 / 12);
            letter-spacing: 0.04em;
        }
    }

@media (min-width: 768px) {
    left: 24px;

    gap:24px;
}

@media (min-width: 1280px) {
    left: 12px;

    gap:12px;
}
`;