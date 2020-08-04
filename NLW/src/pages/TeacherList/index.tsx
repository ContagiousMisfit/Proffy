import React from 'react';

import PageHeader from '../../components/pageHeader';
import './styles.css';
import TeacherItems from '../../components/TeacherItems';

function TeacherList() {

    return (

        <div id="page-teacher-list"
            className="container">

            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">

                    <div className="input-block">
                        <label htmlFor="subject"> Matéria </label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day"> Dia da Semana </label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time"> Horário </label>
                        <input type="text" id="time" />
                    </div>

                </form>
            </PageHeader>

            <main>
              
            <TeacherItems/>
            <TeacherItems/>
            <TeacherItems/>
            <TeacherItems/>
            <TeacherItems/>

            </main>

        </div>
    )

}

export default TeacherList;