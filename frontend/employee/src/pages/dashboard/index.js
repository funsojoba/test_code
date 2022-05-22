import SideBar from '../../components/sideBar/'

import { Container, Content, CardBox, CardWrapper, CardName, CloseBtn, EditBtn } from './style'
import DashNav from '../../components/dashNav'
import Modal from '../../components/modal/'
import Button from '../../components/button'
import H5 from '../../components/typography/h5'
import Small from '../../components/typography/small'
import { Formik } from "formik";
// GoPlus
import { FaEdit } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import validate from "./validate";


import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import fetchDashboard from '../../redux/action/dashboard'
import fetchReportPdf from "../../redux/action/reports/getReportPdf"


const Dashboard = () => {

    let newDate = new Date();
    const [currentMonth] = useState(()=>newDate.getMonth()+1)
    
    const months = {
        1:'Jan.',
        2:'Feb.',
        3:'March',
        4:'April',
        5:'May',
        6:'June',
        7:'July',
        8:'Aug.',
        9:'Sept.',
        10:'Oct.',
        11:'Nov.',
        12:'Dec.'
    }

    const [modalState, setmodalState] = useState(false)

    const closeModal = () => {
        setmodalState(false)
    }

    const openModal = () => {
        setmodalState(true)
    }

    let todaysDate = months[currentMonth] + ' ' + newDate.getDate()

    return <Container>
        <SideBar />

        <Content>
        <Modal
            title="Add Employee"
            display={modalState ? "flex" : "none"}
            close={closeModal}>
            <Formik
                validationSchema={validate}
                initialValues={{
                    amount: '',
                    source: '',
                    description: '',
                    income_date: ''
                }}
                onSubmit={async (values) => {
                    // await (addIncome(values))
                    closeModal()
                }
                }
            >
                {({ handleSubmit, handleBlur, handleChange, values, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                        
                        <Button width="100%" type="submit" >Submit</Button>
                    </form>
                )}
            </Formik>
        </Modal>
            <DashNav>
                <div>Dashboard <br /> <Small>{todaysDate }</Small> </div>
                <div><Button onClick={openModal}> <GoPlus /> &nbsp; Add</Button></div>
            </DashNav>

            <CardWrapper>
                <CardBox background="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1628520968/contact_api/nzmenvrlvbh923cxitkg.jpg">
                    <EditBtn><FaEdit /></EditBtn>
                    <CloseBtn>X</CloseBtn>
                    <CardName>
                        <H5 color="#fff" align="left">David Kingston</H5>
                        <Small color="#00D1FF">Software Engineer </Small>
                    </CardName>
                </CardBox>

                <CardBox  background="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1628528235/contact_api/c8e4y1hji5nqbxz0q2t4.jpg">
                    <CardName>
                        <H5 color="#fff" align="left">Samule Jackson</H5>
                        <Small color="#00D1FF">Software Engineer </Small>
                    </CardName>
                </CardBox>

            </CardWrapper>



            

        </Content>
    </Container>
}

const mapStateToProps = (store) => ({
    dashboardData: store.dashboardReducer,
    reportData: store.reportReducer
})

const mapDispatchToProps = (dispatch) => ({
    fetchDashboard: (month) => dispatch(fetchDashboard(month)),
    fetchReportPdf: ()=> dispatch(fetchReportPdf())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)