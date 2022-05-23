import SideBar from "../../../components/sideBar";
import DashNav from "../../../components/dashNav";
import Box from "../../../components/box";
import Input from "../../../components/input";
import Button from "../../../components/button";
import H5 from "../../../components/typography/h5";
import Paragraph from "../../../components/typography/p";
import Small from "../../../components/typography/small";
import Label from "../../../components/typography/label"
import Modal from '../../../components/modal'
import Img from "../../../components/img/img"



import Loader from "react-spinners/SyncLoader";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Formik } from 'formik'
import {FormContent} from "../style"

import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";



import { Container, Content, Parent, ParentChild, ProfileImg} from "./style";


const Detail = ({  }) => {
    // let id = match.params.id

   

    // useEffect(() => {
    //     fetchIncomeDetail(id)
    // }, [fetchIncomeDetail, id])


    const [modalState, setModalState] = useState(false)
    const openModal = () => {
        setModalState(true)
    }
    const closeModal = () => {
        setModalState(false)
    }

    const previous = () => {
        window.history.back()
    }
    return <Container>
        <Modal
            close={closeModal}
            display={modalState ? 'flex' : 'none'}
        >
            <Paragraph color="#AF0000" >Are you sure you want to delete this employee account?</Paragraph>
            <br />
            <div>
                <Button onClick={closeModal}>Cancle</Button> &nbsp;
                {/* <Button onClick={() => deleteIncome(id)} background="#AF0000" color="#fff" >Delete</Button> */}
            </div>
        </Modal>
        <SideBar />

        <Content>
            <DashNav>
                <>Edit Employee Account</>
            </DashNav>
            <Box>
                <Parent justify="space-between">
                    <Button onClick={previous} padding="10px 15px"><AiOutlineArrowLeft /></Button> 
                    <Button onClick={openModal} padding="10px 15px" background="#DB0069" color="#fff"> <FaTrash/>  Delete</Button> 
                </Parent>

                <Parent column>
                    <ParentChild flex="2">
                        <Formik
                            initialValues={{
                                amount: '',
                                income_date: '',
                                source: '',
                                description: ''
                            }}
                            onSubmit={
                                async (values) => {
                                    // await editIncome(values, id)
                                }
                            }
                        >
                            {({ handleSubmit, handleBlur, handleChange, values, errors, touched, setFieldValue, setFieldTouched }) => (
                                 <form onSubmit={handleSubmit}>
                                 <FormContent>
                                     <Label>First Name</Label>
                                     <Input
                                         value={values.first_name}
                                         onBlur={handleBlur}
                                         onChange={handleChange}
                                         type="text"
                                         name="first_name"
                                         placeholder="John"
                                         width="100%" />
                                     {/* <ErrorMsg>{touched.income_date && errors.income_date ? errors.income_date : null}</ErrorMsg> */}
                                 </FormContent>
                                 <FormContent>
                                     <Label>Last Name</Label>
                                     <Input
                                         value={values.last_name}
                                         onBlur={handleBlur}
                                         onChange={handleChange}
                                         type="text"
                                         name="last_name"
                                         placeholder="Doe"
                                         width="100%" />
                                     {/* <ErrorMsg>{touched.income_date && errors.income_date ? errors.income_date : null}</ErrorMsg> */}
                                 </FormContent>
                                 <FormContent>
                                     <Label>Date of Birth</Label>
                                     <Input
                                         value={values.date_of_birth}
                                         onBlur={handleBlur}
                                         onChange={handleChange}
                                         type="date"
                                         name="date_of_birth"
                                         width="100%" />
                                     {/* <ErrorMsg>{touched.income_date && errors.income_date ? errors.income_date : null}</ErrorMsg> */}
                                 </FormContent>
                                 <FormContent>
                                     <Label>Resume</Label>
                                     <Input
                                         value={values.resume}
                                         onBlur={handleBlur}
                                         onChange={handleChange}
                                         type="file"
                                         name="resume"
                                         accept=".doc,.docx,.txt,.pdf"
                                         width="100%" />
                                     {/* <ErrorMsg>{touched.income_date && errors.income_date ? errors.income_date : null}</ErrorMsg> */}
                                 </FormContent>
                                 <FormContent>
                                     <Label>Profile Picture</Label>
                                     <Input
                                         value={values.profile_picture}
                                         onBlur={handleBlur}
                                         onChange={handleChange}
                                         type="file"
                                         name="profile_picture"
                                         accept="image/png, image/jpeg"
                                         width="100%" />
                                     {/* <ErrorMsg>{touched.income_date && errors.income_date ? errors.income_date : null}</ErrorMsg> */}
                                 </FormContent>
                                 <Button width="100%" type="submit" >Submit</Button>
                             </form>
                            )}
                        </Formik>
                    </ParentChild>
                    <ParentChild flex="1">
                        <Box background="#DDEFE0" displayFlex>
                            <div>
                                <ProfileImg background="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1628520968/contact_api/nzmenvrlvbh923cxitkg.jpg" />
                                <H5 weight="bold">David Kingston</H5>
                                <Paragraph>Software Engineer</Paragraph>
                                <hr/>
                                <Paragraph>2022</Paragraph>
                            </div>
                        </Box>
                    </ParentChild>
                </Parent>
            </Box>

        </Content>

    </Container>
}

const mapStateToProps = store => ({
    incomeData: store.incomeDetailReducer,

})



export default connect(mapStateToProps, {  })(Detail)