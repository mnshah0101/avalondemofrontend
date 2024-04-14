import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useState, useContext } from 'react';
import AppNewsUpdate from 'src/sections/overview/app-news-update';

import { faker } from '@faker-js/faker/locale/af_ZA';

// ----------------------------------------------------------------------

const files = [
  {
    title: 'Initial Contest Reevaluation',
    description:
      'The document deals with the initial challenge of the Citizens United against the provisions of FEC.',
  },
  {
    title: 'Campaign Finance Regulation Deliberation',
    description:
      'This document discusses the extensive review and deliberation over the present campaign finance regulations.',
  },
  {
    title: 'Historical Precedents Argument',
    description:
      'Contains arguments based on historical precedents pertaining to political campaign financing.',
  },
  {
    title: 'First Amendment Rights Examination',
    description:
      'This document contains a detailed examination of First Amendment rights in relation to political campaign financing.',
  },
  {
    title: 'Expert Testimony on Impact',
    description:
      'Transcript of expert testimony detailing the possible impacts of campaign financing changes.',
  },
  {
    title: 'Economic Implications Study',
    description: 'A study on the economic implications of changing campaign finance regulations.',
  },
  {
    title: 'Public Opinion Survey Results',
    description:
      'Results of a nationwide survey gauging public opinion on campaign financing and free speech.',
  },
  {
    title: 'Minority Opinion Analysis',
    description: "Comprehensive analysis on the minority opinion about the case's outcome.",
  },
  {
    title: 'Free Speech versus Regulation Debate',
    description:
      'Documentation of the ongoing debate between regulating political financing and allowing free speech.',
  },
  {
    title: 'Impact on Non-Profit Entities Evaluation',
    description:
      'Exploration of potential implications on non-profit organizations under proposed new regulations.',
  },
  {
    title: 'Counterarguments Evaluation',
    description: 'Detailed report on the various counterarguments presented during the case.',
  },
  {
    title: 'Influence of Corporate Financing Report',
    description:
      'Analyzes the influence exerted by corporations as a result of campaign financing in past elections.',
  },
  {
    title: 'Judicial Review of Campaign Finance Legislation',
    description:
      'Examines the role of the judiciary in reviewing current campaign finance legislation.',
  },
  {
    title: 'Cross Examination Transcript',
    description:
      'Official transcript of the vital cross-examination session during the trial proceedings.',
  },
  {
    title: 'Independent Analysis of Campaign Finances',
    description:
      'Third-party analysis of overall campaign finances in accordance to changing finance laws.',
  },
  {
    title: 'Legal Summaries of Past Relevant Cases',
    description:
      'A collection of legal summaries of past cases relevant to the topic of campaign finance.',
  },
  {
    title: 'Dissection of Constitutional Provisions',
    description: 'A detailed analysis of the constitutional provisions relevant to the case.',
  },
  {
    title: 'Appeals Court Decision Analysis',
    description: 'Summary and analysis of the decision reached by the appeals court in this case.',
  },
  {
    title: 'Comparative Study of Global Practices',
    description:
      'Study comparing campaign financing practices across various democratic countries.',
  },
  {
    title: 'Closing Arguments Document',
    description: 'Record of the closing arguments by both the prosecution and defense.',
  },
];

export default function Documents() {
  // fetch data from the server

  const [documents, setDocuments] = useState([]);

  async function fetchData() {
    if (documents.length > 0) return;

    try {
      const response = await fetch('http://127.0.0.1:5000/retrieveFiles');
      const data = await response.json();
      console.log(data);

      setDocuments(data);
    } catch (err) {
      console.log(err);
    }
  }

  fetchData();

  return (
    <Container>
      <Grid xs={12} md={6} lg={8} className="my-10">
        <AppNewsUpdate
          title="Files"
          list={documents.map((_, index) => ({
            id: faker.string.uuid(),
            title: documents[index].file,
            description: faker.lorem.paragraph(),
            postedAt: documents[index].timestamp,
          }))}
        />
      </Grid>
    </Container>
  );
}
