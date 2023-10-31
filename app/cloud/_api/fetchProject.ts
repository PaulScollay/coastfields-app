import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { SELF_CATERING_UNITS_QUERY } from '@/app/_graphql/selfCateringUnit'
import type { SelfCateringUnit } from '@/payload-types'
// import type { Subscription } from './fetchSubscriptions'
// import type { Customer, TeamWithCustomer } from './fetchTeam'
// import { payloadCloudToken } from './token'

// export type ProjectWithSubscription = Project & {
//   stripeSubscription: Subscription
// }

export interface ProjectsRes {
  docs: SelfCateringUnit[]

  totalDocs: number
  totalPages: number
  page: number
  limit: number
}


// export const fetchTeams = async (teamIDs: string[]): Promise<Team[]> => {
//   const { cookies } = await import('next/headers')
//   const token = cookies().get(payloadCloudToken)?.value ?? null
//   if (!token) throw new Error('No token provided')

//   const res: Team[] = await fetch(`${process.env.NEXT_PUBLIC_CLOUD_CMS_URL}/api/graphql`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       ...(token ? { Authorization: `JWT ${token}` } : {}),
//     },
//     next: { tags: ['teams'] },
//     body: JSON.stringify({
//       query: TEAMS_QUERY,
//       variables: {
//         teamIDs: teamIDs.filter(Boolean),
//         limit: 50,
//         page: 1,
//       },
//     }),
//   })
//     ?.then(r => r.json())
//     ?.then(data => {
//       if (data.errors) throw new Error(data?.errors?.[0]?.message ?? 'Error fetching doc')
//       return data?.data?.Teams?.docs
//     })

//   return res
// }

export const fetchProjects = async (teamIDs: string[]): Promise<ProjectsRes> => {

  const res: ProjectsRes = await fetch(`${process.env.NEXT_PUBLIC_CLOUD_CMS_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // ...(token ? { Authorization: `JWT ${token}` } : {}),
    },
    // next: { tags: ['SelfCateringUnits'] },
    body: JSON.stringify({
      query: SELF_CATERING_UNITS_QUERY,
      variables: {
        // teamIDs: teamIDs.filter(Boolean),
        limit: 9,
        page: 1,
      },
    }),
  })
    ?.then(r => r.json())
    ?.then(data => {
      if (data.errors) throw new Error(data?.errors?.[0]?.message ?? 'Error fetching doc')
      return data?.data?.SelfCateringUnits
    })
  console.log("RES: " + JSON.stringify(res))
  return res
}

// export const fetchProjectAndRedirect = async (args: {
//   teamSlug?: string
//   projectSlug?: string
// }): Promise<{
//   team: TeamWithCustomer
//   project: ProjectWithSubscription
// }> => {
//   const { teamSlug, projectSlug } = args || {}
//   const project = await fetchProjectWithSubscription({ teamSlug, projectSlug })

//   if (!project) {
//     redirect('/404')
//   }

//   if (project?.status === 'draft') {
//     redirect(`/cloud/${teamSlug}/${projectSlug}/configure`)
//   }

//   return {
//     team: project?.team,
//     project,
//   }
// }

// export const fetchProjectWithSubscription = async (args: {
//   teamSlug?: string
//   projectSlug?: string
// }): Promise<
//   ProjectWithSubscription & {
//     team: TeamWithCustomer
//     customer: Customer
//   }
// > => {
//   const { teamSlug, projectSlug } = args || {}
//   const token = cookies().get(payloadCloudToken)?.value ?? null
//   if (!token) throw new Error('No token provided')

//   const projectWithSubscription = await fetch(
//     `${process.env.NEXT_PUBLIC_CLOUD_CMS_URL}/api/projects/${projectSlug}/with-subscription`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         ...(token ? { Authorization: `JWT ${token}` } : {}),
//       },
//       body: JSON.stringify({
//         teamSlug,
//         projectSlug,
//       }),
//     },
//   )
//     ?.then(res => res.json())
//     ?.then(res => {
//       if (res.errors) throw new Error(res?.errors?.[0]?.message ?? 'Error fetching doc')
//       return res
//     })

//   return projectWithSubscription
// }
