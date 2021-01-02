import React, {useEffect, useMemo, useState} from 'react';
import {useRouteMatch, generatePath, Link} from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';
import route from '../../route';
import { AiOutlineSearch } from 'react-icons/ai';
import Pagination from '../../components/Pagination';
import SubLeftMenu from '../../components/SubLeftMenu';
import {useTranslation} from 'react-i18next'
import {Helmet} from "react-helmet";
import {useSelector, useDispatch} from 'react-redux';
import * as actions from 'store/actions/content';
import moment from 'moment/dist/moment';
import {CustomPagination} from 'components/Custom';
import {CustomPagination} from 'components/Custom';
// import {LocalDataList} from "../../components/LocalDataList"

import {apiUrl} from "config";
const TYPE = 'localstories';
const LocalData = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch()
  const {list = [], totalCount = 0, loading} = useSelector(({content}) => ({...content}));
  const [perPage, setPerPage] = useState(3)
  const [page, setPage] = useState(0)
  const [params, setParams] = useState({_limit: perPage, _sort: `createdAt:DESC`, _start: page * perPage})

  console.log(list);

  const {t} = useTranslation()
  const pageCount = Math.ceil(totalCount / perPage);

  const updateParams = (data) => {
    setParams({...params, ...data});
  };

  const handleChange = (value) => {
    console.log(value, '키워드 입력 및 타입 셀렉트 시')

  }
  //page 이동
  useEffect(() => {
    const {_start, _limit, classification_eq} = params;
    if (_limit !== perPage || _start !== page * perPage) {
      updateParams({...params, _start: page * perPage, _limit: perPage})
    }
  }, [page, perPage])

useEffect(() => {
    dispatch(actions.listRequest({type: TYPE, ...params}))
  }, [params])
  return (
    <div className="localdata">
      <BreadCrumb list={route.dataset} />
      <div className="sub">
        <SubLeftMenu
          title={route.dataset.title}
          lnbList={route.dataset.list}
        />
        <div className="localdata__layout">

          <h1 className="sub__title">
            <span className="">지역 스토리</span>
          </h1>

          <div className="wrap">
            <div className="localdata__filter">
              <div className="card">
                <div className="card-header">구분</div>
                <div className="list-group list-group-flush">
                  <label htmlFor={''} className="list-group-item">
                    <input type="checkbox" id={''} />
                    지역설화DB(5724)
                  </label>
                  <label htmlFor={''} className="list-group-item">
                    <input type="checkbox" id={''} />
                    호남학산책(245)
                  </label>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header">지역별</div>
                <div className="list-group list-group-flush">
                  <label htmlFor={''} className="list-group-item">
                    <input type="checkbox" id={''} />
                    강진군(32)
                  </label>
                  <label htmlFor={''} className="list-group-item">
                    <input type="checkbox" id={''} />
                    고흥군(12)
                  </label>
                </div>
              </div>
            </div>

            <div className="localdata__content">

              <div className="localdata__search">
                <input type="text" placeholder={'검색어를 입력하세요'}/>
                <button>
                  <AiOutlineSearch />
                </button>
              </div>
              {/*끌어올 데이터 컴포넌트로 */}

                  <div className="localdata__list">
                              <Link to={'/dataset/localdata/1'} className='localdata__item'>
                                <div className="thumb">
                                  <img src="/assets/images/dummyimg31.png" alt=""/>
                                </div>
                                <div className="info">
                                  <div className="info__top">
                                    <h2>{}</h2>
                                    <p className="created">
                                      생성일  2016-07-11
                                    </p>
                                  </div>
                                  <div className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam debitis dolor dolore earum exercitationem incidunt ipsam ipsum molestias nostrum officia saepe sed, tenetur ut vel veritatis voluptatum. Exercitationem, voluptatum!
                                  </div>
                                  <div className="info__foot">
                                    <span>자세히보기</span>
                                  </div>
                                </div>
                              </Link>
                      </div>
                      {/* 아이템 리스트 컴포넌트 분리 */}
                      {/* 페이지 컴포넌트 */}
              {/*<CustomPagination*/}
              {/*    pageSize={perPage}*/}
              {/*    pageIndex={page}*/}
              {/*    pageCount={pageCount}*/}
              {/*    onPageChange={({selected}) => setPage(selected)}*/}
              {/*/>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalData;
