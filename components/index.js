import React from 'react'
import { Container, Title, Wrapper, Column} from "./style.css";

export default function Footer({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Footer.Title = function FooterTitle({ children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}
Footer.Wrapper = function FooterWrapper({children, restProps}){
    return<Wrapper{...restProps}>{children}</Wrapper>
}

Footer.Column = function FooterColumn({children, restProps}){
    return<Column{...restProps}>{children}</Column>
}