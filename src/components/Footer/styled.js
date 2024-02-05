import styled from "styled-components";
import { ReactComponent as GitHubIcone } from "../../image/Github_black.svg";
import { ReactComponent as LinkedInIcone } from "../../image/LinkedIN_black.svg";
import { ReactComponent as FacebookIcone } from "../../image/Facebook_black.svg";

export const FooterWrapper = styled.div`
    margin: 0 auto;
    max-width: 1216px;
`;

export const FooterParagraph = styled.p`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 12px;
    font-weight: 700;
`;

export const FooterMail = styled.span`
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 32px;
    font-weight: 900;

    &:hover {
        color: ${({ theme }) => theme.color.scienceBlue};
        transition: 0.5s;
    }
`;

export const FooterContent = styled.div`
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 18px;
    font-weight: 400;
    margin-top: 24px;
`;

export const FooterIcones = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 24px;
    width: fit-content;
    margin-top: 56px;
`;

export const FooterGitHubIcone = styled(GitHubIcone)`
    fill: ${({ theme }) => theme.color.mineShaft};
    transition: fill 0.5s;

    &:hover {
        fill: ${({ theme }) => theme.color.scienceBlue};
    }
`;

export const FooterLinkedInIcone = styled(LinkedInIcone)`
    fill: ${({ theme }) => theme.color.mineShaft};
    transition: fill 0.5s;

     &:hover {
        fill: ${({ theme }) => theme.color.scienceBlue};
    }
`;

export const FooterFacebookIcone = styled(FacebookIcone)`
    fill: ${({ theme }) => theme.color.mineShaft};
    transition: fill 0.5s;
    
    &:hover {
        fill: ${({ theme }) => theme.color.scienceBlue};
    }
`;