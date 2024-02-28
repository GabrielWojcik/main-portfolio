import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export function TimeLine(){
    return(
        <Timeline position="alternate-reverse">
        <TimelineItem>
          <TimelineSeparator>
          <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Estágio - Suporte ao usuario </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
          <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Estágio - Front-end</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
          <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Tecnologia em Análise e Desenvolvimento de Sistemas</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
          <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Analista e Desenvolver Jr.</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Advanced React - Meta</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>AWS Certification Cloud Practitioner - em andamento</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
          </TimelineSeparator>
          <TimelineContent>Pós Graduação...em breve</TimelineContent>
        </TimelineItem>
      </Timeline>
    )
}