interface BaseData {
  id: string;
}

//   Plan
//     |
// Programmes --- Majors
//            \__ Minors
//             \_ Categories -- SubCategories

interface Plan extends BaseData {
  name: string
  programmeId: string
  chosenMajorId: string
  chosenMinorId: string
  chosenCoursesIds: string
}

interface ProgrammeStructure extends BaseData {
  name: string
}

interface Major extends BaseData {
  name: string
}

interface Minor extends BaseData {
  name: string
}

interface Category extends BaseData {
  name: string;
  subcategoryIds: string[];
  is_major: boolean;
  is_minor: boolean
  min_credits?: number;
  notes?: string;
}

interface SubCategory extends BaseData {
  name: string;
  min_credits?: number;
  notes?: string;

  parentId: string
}



interface Season extends BaseData {
  name: string;
}

interface Semester extends BaseData {
  name: string;
}


interface Course extends BaseData {
  category_id: string;
  season_id: string;
  subcategory_id: string;

  credits: number;
  link: string;
  name: string;
  school_course_id: string;
}

interface MyField<T> {
  name: string
  initialValue: T
  label: string
  placeholder: string
  validate?: (value: T) => string
  isRequired?: boolean
  possibleValues?: T[],
  minNumber?: number,
  maxNumber?: number
}

type TextField = MyField<string>;
type TextSelectField = MyField<string>;
type NumberField = MyField<number>;
