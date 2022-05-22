import Box from "../box";
import Paragraph from "../typography/p";

import { MainBody, CloseBtn, Content } from "./style";

const Modal = ({children, display, close, title})=>{
    return <MainBody display={display}>
        <Content>
            <Box>
                <Paragraph align="center">{title}</Paragraph>
                <CloseBtn onClick={close}>X</CloseBtn>
                {children}
            </Box>
        </Content>
    </MainBody>
}

export default Modal