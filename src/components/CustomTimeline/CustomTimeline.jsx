import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './CustomTimeline.css';

const CustomTimeline = ({ data }) => {
    return (
        <Timeline className="customTimeline" position="right">
          <TimelineItem >
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{new Date(data.created_at).toLocaleString()}</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary"/> 
            </TimelineSeparator>
            <TimelineContent>Last edit {new Date(data.updated_at).toLocaleString()}</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
}

export default CustomTimeline;

