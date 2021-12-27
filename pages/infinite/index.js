import React,{useEffect,useState} from 'react';
import {useInfiniteQuery} from "react-query";
import {getUsers} from "../../gate";
import InfiniteScroll from "react-infinite-scroll-component";
import {client} from "../../gate/api";
import axios from "axios";


const Infinite = () => {
    //accessing window offset
    // const [get, setGet] = useState(false);
    // useEffect(() => {
    //     const list = document.getElementById('list')
    //     list.addEventListener('scroll', () => {
    //         const height = list.scrollHeight - 3/10 * list.scrollHeight
    //         if (list.scrollTop > height) {
    //             console.log('request for next page now');
    //             fetchNextPage()
    //         } else {
    //             setGet(false)
    //         }
    //     })
    // },[]);
    // making page infinite
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery('users', getUsers, {
        getNextPageParam: (lastPage) => {
           const totalPages = lastPage.data.total_pages
           const current = lastPage.data.page;
            if (current < totalPages) {
                return current + 1
            }
            return false
        } ,
    });
    console.log(data);


    return (
        <div id="list" className="h-[40vh] bg-white mt-12 overflow-y-scroll p-32 rounded-2xl normal-shadow container-large">
            {
                data &&
                <InfiniteScroll
                    next={() => fetchNextPage()}
                    hasMore={hasNextPage}
                    pullDownToRefreshThreshold={2}
                    loader={
                        <div className="text-3xl font-bold"> loading...</div>
                    }
                    dataLength={data.pages.length}
                >
                    {data && data.pages.map((group, i) => (
                        <React.Fragment key={i}>
                            {group.data.data.map(user => (
                                <p className="mb-24" key={user.id}>{user.first_name}</p>
                            ))}
                        </React.Fragment>
                    ))}
                </InfiniteScroll>
            }
        </div>
    );
};
export default Infinite;

