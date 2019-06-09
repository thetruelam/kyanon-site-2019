import { section as sectionConst } from '../const'
import { HOMEPAGE_FETCH_DATA_SUCCESS } from '../const/fetchData'

const section = (
  state = {
    homePage: {
      currentSection: 1,
      maxSection: 5,
      section1: {
        currentSlide: 1,
        maxSlide: 1
      },
      section2: {
        currentSlide: 1,
        maxSlide: 2
      }
    },
    contactUs: {
      currentSection: 1,
      maxSection: 2
    },
    aboutUs: {
      currentSection: 1,
      maxSection: 6,
      section2: {
        currentSlide: 1,
        maxSlide: 2
      },
      section5: {
        currentSlide: 1,
        maxSlide: 2
      }
    },
    career: {
      currentSection: 1,
      maxSection: 3
    }
  },
  action
) => {
  switch (action.type) {
  case sectionConst.NEXT_SECTION_HOMEPAGE:
    return {
      ...state,
      homePage: {
        ...state.homePage,
        currentSection: state.homePage.currentSection + 1
      }
    }
  case sectionConst.PREV_SECTION_HOMEPAGE:
    return {
      ...state,
      homePage: {
        ...state.homePage,
        currentSection: state.homePage.currentSection - 1
      }
    }

  case sectionConst.MOVE_TO_SECTION_HOMEPAGE:
    return {
      ...state,
      homePage: {
        ...state.homePage,
        currentSection: action.sectionNum
      }
    }

  case sectionConst.NEXT_SLIDE_HOMEPAGE_SECTION1:
    return {
      ...state,
      homePage: {
        ...state.homePage,
        section1: {
          ...state.homePage.section1,
          currentSlide: state.homePage.section1.currentSlide + 1
        }
      }
    }
  case sectionConst.PREV_SLIDE_HOMEPAGE_SECTION1:
    return {
      ...state,
      homePage: {
        ...state.homePage,
        section1: {
          ...state.homePage.section1,
          currentSlide: state.homePage.section1.currentSlide - 1
        }
      }
    }
  case sectionConst.MOVE_TO_SLIDE_HOMEPAGE_SECTION1:
    return {
      ...state,
      homePage: {
        ...state.homePage,
        section1: {
          ...state.homePage.section1,
          //index + 1
          currentSlide: action.slideNum
        }
      }
    }
  case HOMEPAGE_FETCH_DATA_SUCCESS:
    return {
      ...state,
      homePage: {
        ...state.homePage,
        section1: {
          ...state.homePage.section1,
          maxSlide:
              action.res.homesection1.homesection1slider.homesection1slideitems
                .length
        }
      }
    }
    // contactus
  case sectionConst.NEXT_SECTION_CONTACTUS:
    return {
      ...state,
      contactUs: {
        ...state.contactUs,
        currentSection:
            state.contactUs.currentSection < state.contactUs.maxSection
              ? state.contactUs.currentSection + 1
              : state.contactUs.currentSection
      }
    }
  case sectionConst.PREV_SECTION_CONTACTUS:
    return {
      ...state,
      contactUs: {
        ...state.contactUs,
        currentSection:
            state.contactUs.currentSection > 1
              ? state.contactUs.currentSection - 1
              : state.contactUs.currentSection
      }
    }

  case sectionConst.MOVE_TO_SECTION_CONTACTUS:
    return {
      ...state,
      contactUs: {
        ...state.contactUs,
        currentSection: action.sectionNum
      }
    }
    // aboutus
  case sectionConst.NEXT_SECTION_ABOUTUS:
    return {
      ...state,
      aboutUs: {
        ...state.aboutUs,
        currentSection:
            state.aboutUs.currentSection < state.aboutUs.maxSection
              ? state.aboutUs.currentSection + 1
              : state.aboutUs.currentSection
      }
    }
  case sectionConst.PREV_SECTION_ABOUTUS:
    return {
      ...state,
      aboutUs: {
        ...state.aboutUs,
        currentSection:
            state.aboutUs.currentSection > 1
              ? state.aboutUs.currentSection - 1
              : state.aboutUs.currentSection
      }
    }

  case sectionConst.MOVE_TO_SECTION_ABOUTUS:
    return {
      ...state,
      aboutUs: {
        ...state.aboutUs,
        currentSection: action.sectionNum
      }
    }
    //section2 about-us
  case sectionConst.MOVE_TO_SLIDE_ABOUTUS_SECTION2:
    return {
      ...state,
      aboutUs: {
        ...state.aboutUs,
        section2: {
          ...state.aboutUs.section2,
          //index + 1
          currentSlide: action.slideNum
        }
      }
    }
    //section5 aboutus
  case sectionConst.MOVE_TO_SLIDE_ABOUTUS_SECTION5:
    return {
      ...state,
      aboutUs: {
        ...state.aboutUs,
        section5: {
          ...state.aboutUs.section5,
          //index + 1
          currentSlide: action.slideNum
        }
      }
    }
    //career
  case sectionConst.MOVE_TO_SECTION_CAREER:
    return {
      ...state,
      career: {
        ...state.career,
        currentSection: action.sectionNum
      }
    }
  default:
    return state
  }
}
export default section
