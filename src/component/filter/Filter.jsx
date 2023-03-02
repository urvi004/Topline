import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { Data } from "../../data";

const Filter = ({next, handleMoreImage}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    show === false ? setShow(true) : setShow(false);
  };

  return (
    <>
      <div className="filter">
        <div className="filter__main">
          <div className="filter__main__heading">
            <h1>Baseline Blog</h1>
            <h2>
              Read the latest collection of Baseline stories and news. From
              clinical trails to COVID-19 efforts and beyond, we’re accelerating
              scientific discovery.
            </h2>
          </div>
          <div className="filter__main__option">
            <div className="input-text">
              <input type="text" placeholder="Search post" />
              <AiOutlineSearch className="search" />
            </div>
            <div className="choice">
              <button onClick={handleClick}>
                Filter post by <AiOutlineDown />
              </button>
              {show && (<>
                <form action="" className="choice__item">
                    <div className="choice__item__all">
                  <div className="choice__item__all__group" id="show-all-group">
                    <div className="label-group">
                      <div className="label-check">
                        <label htmlFor="show-all">
                          <input type="checkbox" id="show-all" />
                          show all
                          {/* <span className='checkbox-icon' ></span> */}
                        </label>
                      </div>
                    </div>
                  </div>
                  {Data.filterOptions.map((item, index) => {
                    return (
                      <>
                        <div
                          className="choice__item__all__group"
                          id="show-all-group"
                        >
                          <div className="label-group">
                            <h4>{item.topic}</h4>

                            {item.subTopic.map((list, index) => {
                              return (
                                <>
                                  <div className="label-check">
                                    <label htmlFor="show-all">
                                      <input type="checkbox" id="show-all" />
                                      {list.type}
                                    </label>
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    );
                  })} 
                  </div>  
                  <button className="btn">Apply filters</button>            
                </form>
                 
                 </>
              )}
             
            </div>
            
          </div>
        </div>

        <div className="filter__tiles">
          {Data?.blogData.slice(0, next)?.map((items, index) => {
            return (
              <>
                <div className="filter__tiles__cards">
                  <div className="filter__tiles__cards__image">
                    <img
                      src="https://images.unsplash.com/photo-1677397078620-d050cfe3b5a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>
                  <div className="filter__tiles__cards__content">
                    <div className="filter__tiles__cards__content__article">
                      <h3>{items.title}</h3>
                      <p>
                        {items.content.slice(0,100)+ "..."}
                      </p>
                    </div>
                    <div className="filter__tiles__cards__content__date">
                      <time>{(new Date(items.date)).toLocaleDateString("default", {  year: 'numeric', month: 'long', day: 'numeric' })}</time>
                      <button>Read more</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {next < Data?.studyTiles?.length && (
          <div className="load">
          <button
            onClick={handleMoreImage}     
          >
            Load more
          </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
