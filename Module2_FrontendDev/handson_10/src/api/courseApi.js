import apiClient from './apiClient';

/**
 * Fallback Course Mock Data for resilient offline/timeout support
 */
const MOCK_COURSES = [
  {
    id: 1,
    name: "Introduction to Computer Science",
    code: "CS101",
    credits: 4,
    description: "Foundational concepts in computer science, algorithms, and basic programming using Python."
  },
  {
    id: 2,
    name: "Database Systems & SQL Operations",
    code: "CS202",
    credits: 3,
    description: "Relational database design, schema normalization, SQL queries, indexing, and transaction management."
  },
  {
    id: 3,
    name: "Full Stack Web Application Development",
    code: "CS303",
    credits: 4,
    description: "Modern frontend frameworks, state management, REST APIs, and database integration patterns."
  },
  {
    id: 4,
    name: "Software Engineering & Design Principles",
    code: "CS404",
    credits: 3,
    description: "Agile methodologies, testing strategies, design patterns, and enterprise system architecture."
  },
  {
    id: 5,
    name: "Artificial Intelligence & Machine Learning",
    code: "CS505",
    credits: 4,
    description: "Supervised and unsupervised learning, neural networks, decision trees, and regression analysis."
  }
];

/**
 * Course Service API Functions with Graceful Local Fallbacks (Task 139)
 */

export const getAllCourses = async () => {
  try {
    // Fetch first 5 posts mapped to course entities
    const posts = await apiClient.get('/posts?_limit=5');
    return posts.map((post, index) => ({
      id: post.id,
      name: post.title,
      code: `CS${(index + 1) * 101}`,
      credits: (index % 2 === 0) ? 4 : 3,
      grade: 'A',
      description: post.body
    }));
  } catch (error) {
    console.warn('[Central API Client] Request failed or timed out. Falling back to local mock data.', error);
    return MOCK_COURSES;
  }
};

export const getCourseById = async (id) => {
  try {
    const post = await apiClient.get(`/posts/${id}`);
    return {
      id: post.id,
      name: post.title,
      code: `CS${post.id * 101}`,
      credits: 4,
      grade: 'A',
      description: post.body
    };
  } catch (error) {
    console.warn(`[Central API Client] Request for course ${id} failed. Falling back to local mock data.`, error);
    const mock = MOCK_COURSES.find(c => c.id === Number(id)) || MOCK_COURSES[0];
    return mock;
  }
};

export const enrollStudent = async (studentId, courseId) => {
  try {
    return await apiClient.post('/posts', {
      userId: studentId,
      courseId: courseId,
      enrolledAt: new Date().toISOString()
    });
  } catch (error) {
    console.warn('[Central API Client] Enrollment request failed. Simulating local success.', error);
    return {
      id: courseId,
      userId: studentId,
      courseId: courseId,
      enrolledAt: new Date().toISOString()
    };
  }
};
