import type { Testimonial } from "../types/testimonial";

import { googleReviews } from "../data/googleReviews";

// Full real data from data/googleReviews.ts
let dbReviews: Testimonial[] = googleReviews.map((r, index) => ({
  ...r,
  id: index + 1,
  status: true,
}));

// Initial jobs from src/data/careers.ts
import { jobOpenings } from "../data/careers";

// Full real data from data/careers.ts
let dbJobs: any[] = jobOpenings.map((job) => ({ ...job, active: true }));

import { sapCourses } from "../data/courses";

// Full real data from data/courses.ts
let dbCourses: any[] = sapCourses.map((course) => ({
  ...course,
  active: true,
}));

// Reviews API
export function getReviews() {
  return dbReviews.filter((r) => r.status !== false);
}

export function updateReview(id: number, data: Partial<Testimonial>) {
  const index = dbReviews.findIndex((r) => r.id === id);
  if (index !== -1) {
    dbReviews[index] = { ...dbReviews[index], ...data };
    return true;
  }
  return false;
}

export function addReview(data: Omit<Testimonial, "id">) {
  const newReview = {
    ...data,
    id: Math.max(0, ...dbReviews.map((r) => r.id)) + 1,
    status: true,
  };
  dbReviews.unshift(newReview);
}

export function deleteReview(id: number) {
  const index = dbReviews.findIndex((r) => r.id === id);
  if (index !== -1) {
    dbReviews.splice(index, 1);
    return true;
  }
  return false;
}

// Jobs API
export function getJobs() {
  return dbJobs.filter((j) => j.active !== false);
}

export function updateJob(id: string, data: Partial<any>) {
  const index = dbJobs.findIndex((j) => j.id === id);
  if (index !== -1) {
    dbJobs[index] = { ...dbJobs[index], ...data };
    return true;
  }
  return false;
}

export function addJob(data: any) {
  dbJobs.unshift({ ...data, active: true });
}

export function deleteJob(id: string) {
  const index = dbJobs.findIndex((j) => j.id === id);
  if (index !== -1) {
    dbJobs.splice(index, 1);
    return true;
  }
  return false;
}

// Courses API
export function getCourses() {
  return dbCourses.filter((c) => c.active !== false);
}

export { dbReviews, dbJobs, dbCourses };

export function updateCourse(id: string, data: Partial<any>) {
  const index = dbCourses.findIndex((c) => c.id === id);
  if (index !== -1) {
    dbCourses[index] = { ...dbCourses[index], ...data };
    return true;
  }
  return false;
}

export function addCourse(data: any) {
  dbCourses.unshift({ ...data, active: true });
}

export function deleteCourse(id: string) {
  const index = dbCourses.findIndex((c) => c.id === id);
  if (index !== -1) {
    dbCourses.splice(index, 1);
    return true;
  }
  return false;
}
