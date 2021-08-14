module.exports = {
  sanity: {
    projectId: process.env.GRIDSOME_SANITY_PROJECT_ID || '14rkk3nd',
    dataset: process.env.GRIDSOME_SANITY_DATASET || 'production',
    token: process.env.SANITY_TOKEN || ''
  }
}
