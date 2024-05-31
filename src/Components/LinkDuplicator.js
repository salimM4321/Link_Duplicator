import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';
import { Formik, Form } from 'formik';

const LinkDuplicator = () => {
  const [latestLink, setLatestLink] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/links')
      .then(response => response.json())
      .then(data => setLatestLink(data[data.length - 1])) // Get the latest link
      .catch(error => console.error('Error fetching links:', error));
  }, []);

  const handleAddLink = (values, { resetForm }) => {
    const { original, offerId, domain, randomText } = values;
    const duplicate = `http://localhost:5000/r/${domain}/${randomText}`;

    fetch('http://localhost:5000/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ original, offerId, domain, randomText, duplicate }),
    })
      .then(response => response.json())
      .then(data => {
        setLatestLink(data);
        resetForm();
      })
      .catch(error => console.error('Error adding link:', error));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Beginner-TO-Success🔥
      </Typography>
      <Typography variant="h5" gutterBottom>
        Link Duplicator
      </Typography>
      <Formik
        initialValues={{ original: '', offerId: '', domain: '', randomText: '' }}
        onSubmit={handleAddLink}
      >
        {({ values, handleChange }) => (
          <Form>
            <Box mb={2}>
              <TextField
                fullWidth
                name="original"
                label="Enter original link"
                value={values.original}
                onChange={handleChange}
                variant="outlined"
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                name="offerId"
                label="Enter offer ID"
                value={values.offerId}
                onChange={handleChange}
                variant="outlined"
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                name="domain"
                label="Enter domain"
                value={values.domain}
                onChange={handleChange}
                variant="outlined"
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                name="randomText"
                label="Enter random text"
                value={values.randomText}
                onChange={handleChange}
                variant="outlined"
              />
            </Box>
            <Button type="submit" variant="contained" color="primary">
              Add Link
            </Button>
          </Form>
        )}
      </Formik>
      <Grid container spacing={2} style={{ marginTop: '10px' }}>
        {latestLink && (
          <Grid item xs={12}>
            <Box
              p={2}
              border={1}
              borderRadius={4}
              borderColor="grey.400"
              boxShadow={1}
            >
              <Typography variant="body1">
                <strong>Original:</strong> <a href={latestLink.original} target="_blank" rel="noopener noreferrer">{latestLink.original}</a>
              </Typography>
              <Typography variant="body1">
                <strong>Offer ID:</strong> {latestLink.offerId}
              </Typography>
              <Typography variant="body1">
                <strong>Domain:</strong> {latestLink.domain}
              </Typography>
              <Typography variant="body1">
                <strong>Random Text:</strong> {latestLink.randomText}
              </Typography>
              <Typography variant="body1">
                <strong>Duplicate:</strong> <a href={latestLink.duplicate} target="_blank" rel="noopener noreferrer">{latestLink.duplicate}</a>
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default LinkDuplicator;
