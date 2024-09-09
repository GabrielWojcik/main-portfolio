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
          <TimelineContent>Estágio - Suporte ao usuário </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
          <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Estagiário de Tecnologia de Informação</TimelineContent>
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
          <TimelineContent>Analista e Desenvolvedor de Sistemas</TimelineContent>
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
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>AWS Certification Cloud Practitioner</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
          </TimelineSeparator>
          <TimelineContent>Analista e Desenvolvedor de Sistemas</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="info" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Pós Graduação</TimelineContent>
        </TimelineItem>
      </Timeline>
    )
}