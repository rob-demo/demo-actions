module.exports = async ({github, context, owner, repo, workflow_id}) => {
    
    const workflowParts = workflow_id.split('/')
    console.log(`${JSON.stringify(workflowParts)}`)
    const workflow = workflowParts[workflowParts.length-1]
    
    console.log(`Running on repo [${owner}/${repo}] with workflow_id: [${workflow}]`)

    const issue = await github.rest.issues.get({
        owner: owner,
        repo: repo,
        issue_number: 6,
      })
    console.log(`Issue: ${JSON.stringify(issue)}`)
          
    try {
        console.log(`Start of the try call`)
        const creator = context.payload.sender.login
        console.log(`Creator: ${creator}`)
        // const runs = await github.rest.actions.listWorkflowRuns({
        //     owner,
        //     repo,
        //     workflow_id: workflow
        // });
                    
        // console.log(``)
        // console.log(`${JSON.stringify(runs)}`)
        // console.log(``)
        // console.log(`Found [${runs.length}] workflow runs`)
    } catch (error) {
        console.log(`error: ${error}`)
    }

    console.log(`The End`)

  }