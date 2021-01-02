import React, {useState, useEffect} from 'react';

import {MainSlide, PartnersSlide} from 'components/Slide';
import MainBoard from 'components/MainBoard';
import ProgramList from 'components/ProgramList';
import ReservationCalendar from 'components/ReservationCalendar';
import SpaceInfo from 'components/SpaceInfo';
import EquipmentInfo from 'components/EquipmentInfo';

import {reservationlist, equipmentlist} from 'data';


//graphql 관련
import {useQuery, useLazyQuery} from "@apollo/react-hooks";
import * as query from "queries/content";

const Index = () => {

    //프로그램 목록 관련
    const [getStudyPrograms, {data: studyData}] = useLazyQuery(query.STUDY_PROGRAM_QUERY);
    const [studyList, setStudyList] = useState([]);

    //지원사업 목록 관련
    const [getSupportPrograms, {data: supportData}] = useLazyQuery(query.SUPPORT_PROGRAM_QUERY);
    const [supportList, setSupportList] = useState([]);

    //파트너쉽 사이트 관련
    const [getRelationSites, {data: rs}] = useLazyQuery(query.RELATION_SITES_QUERY);
    const [relationSites, setRelationSites] = useState([]);

    useEffect(() => {
        getStudyPrograms({variables: {limit: 9, sort: "createdAt:DESC"}})
        getSupportPrograms({variables: {limit: 3, sort: "createdAt:DESC"}})
        getRelationSites({variables: {sort: "pinned_order:ASC,createdAt:DESC"}})
    }, [])

    //프로그램 목록 관련
    useEffect(() => {
        studyData && studyData.studyprograms && setStudyList(studyData.studyprograms);
    }, [studyData]);

    //지원사업 목록 관련
    useEffect(() => {
        supportData && supportData.supportprograms && setSupportList(supportData.supportprograms);
    }, [supportData]);

    //파트너쉽 사이트 관련
    useEffect(() => {
        rs && rs.relationsitelists && setRelationSites(rs.relationsitelists);
    }, [rs])

    return (
        <div className="home">

            {/* 비쥬얼 */}
            <MainSlide/>

            {/* 게시판 */}
            <MainBoard/>

            {/* 전남콘텐츠코리아랩 프로그램은 ~ing : */}
            <div className="programBlock">
                <div className="wrap">
                    <ProgramList
                        path={'/program/studyprogram'}
                        list={studyList}
                        title={'전남콘텐츠코리아랩 프로그램은 ~ing :'}
                        description={'전남콘텐츠코리아랩과 가까워지는 방법! 특화 교육프로그램에 참여해보세요 :)\n'}
                    />
                </div>
            </div>

            {/* 전남콘텐츠랩 지원사업 */}
            <div className="section section--business">
                <div className="wrap">
                    <ProgramList
                        path={'/program/supportprogram'}
                        list={supportList}
                        title={'전남콘텐츠랩 지원사업'}
                    />
                </div>
            </div>

            {/* 공간장비 예약캘린더 */}
            <div className="section">
                <div className="wrap">
                    <ReservationCalendar events={reservationlist}/>
                </div>
            </div>

            {/* 공간 안내 */}
            {
                false && (
                    <div className="section">
                        <div className="wrap">
                            <SpaceInfo/>
                        </div>
                    </div>
                )
            }

            {/* 장비 안내 */}
            {
                false && (
                    <div className="section">
                        <div className="wrap">
                            <EquipmentInfo slides={equipmentlist}/>
                        </div>
                    </div>
                )
            }

            {/* 관련 기관 */}
            <div className="section section--relation">
                <div className="wrap">
                    <PartnersSlide data={relationSites}/>
                </div>
            </div>
        </div>
    );
};

export default Index;


//집계 
query{
    localstoryCategoriesConnection{
      aggregate{
        totalCount
      }
    }
    }


    query{
        locationCategoriesConnection{
          aggregate{
            totalCount
          }
        }
        }