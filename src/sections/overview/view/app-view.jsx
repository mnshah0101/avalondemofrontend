import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Citizens United vs FEC
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Queries"
            total={714000}
            color="success"
            icon={<img alt="icon" height="50px" src="/assets/icons/queries.svg" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3} >
          <AppWidgetSummary
            title="Processed"
            total={1352831}
            color="info"
            icon={<img alt="icon" height="50px" src="/assets/icons/processed.svg" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="In Review"
            total={1723315}
            color="warning"
            icon={<img alt="icon" height="50px" src="/assets/icons/review.svg" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Days Left"
            total={234}
            color="error"
            icon={<img alt="icon" height="50px" src="/assets/icons/calendar.svg" />}
          />
        </Grid>

    

      

   

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Case Strength"
            chart={{
              categories: ['Arguments', 'Documents', 'Research', 'Case'],
              series: [
                { name: 'Series 1', data: [80, 60, 56, 84] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="Case Documents"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>




     
      </Grid>
    </Container>
  );
}
