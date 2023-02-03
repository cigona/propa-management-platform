import { Grid, MediaQuery } from '@mantine/core'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import DashboardCard from '../components/cards/DashboardCard'
import { Autoplay, Pagination } from 'swiper';

function DashboardCardsView() {
    return (
        <>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <div style={{ width: '100%', padding: 12 }}>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><DashboardCard /></SwiperSlide>
                        <SwiperSlide><DashboardCard /></SwiperSlide>
                        <SwiperSlide><DashboardCard /></SwiperSlide>
                        <SwiperSlide><DashboardCard /></SwiperSlide>
                    </Swiper>
                </div>
            </MediaQuery>
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Grid sx={{ my: 3 }}>
                    <Grid.Col sm={6} md={4} lg={3}>
                        <DashboardCard />
                    </Grid.Col>
                    <Grid.Col sm={6} md={4} lg={3}>
                        <DashboardCard />
                    </Grid.Col>
                    <Grid.Col sm={6} md={4} lg={3}>
                        <DashboardCard />
                    </Grid.Col>
                    <Grid.Col sm={6} md={4} lg={3}>
                        <DashboardCard />
                    </Grid.Col>
                </Grid>
            </MediaQuery>

        </>

    )
}

export default DashboardCardsView