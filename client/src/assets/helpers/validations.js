import Validator from 'validator';

export default {
  __25Chars: (str) => {
    return Validator.isLength(str, { min: 0, max: 25 });
  },
  bio: (str) => {
    return Validator.isLength(str, { min: 0, max: 300 })
  },
  career: ({ working, tenure, company, jobSearch }) => {
    if (working && working === 'yes' && (!tenure || !company)) {
      return false;
    }
    if (working && working === 'no' && (!tenure || !jobSearch)) {
      return false;
    }
    return true;
  },
  codePen: (str) => {
    return !Validator.isURL(str);
  },
  country: (str) => {
    if (!str) {
      return false;
    }
    return true;
  },
  displayName: (str) => {
    return Validator.isLength(str, { min: 0, max: 40 });
  },
  email: (str) => {
    if (str && !Validator.isEmail(str)) {
      return false;
    }
    return true;
  },
  mentorshipBio: (str) => {
    return Validator.isLength(str, { min: 0, max: 200 })
  },
  mentorshipSection: ({ isMentor, isMentee, mentorshipSkills }) => {
    if ((isMentee || isMentor) && !mentorshipSkills) {
      return false;
    }
    return true;
  },
}
