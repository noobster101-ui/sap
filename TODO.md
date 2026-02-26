# SAP Courses Restructuring TODO

## Phase 1: Data Layer ✅

- [x] Update `src/data/courses.ts`
  - Added `division: 'ECC' | 'S/4HANA'` field to SAPCourse interface
  - Added `brochure?: string` field for optional PDF link
  - Updated existing courses with division and brochure
  - Added all new ECC courses (Logistics, WM, EWM)
  - Added all new S/4 HANA courses (Finance, WM, TM, ABAP on HANA, EWM, HANA)

## Phase 2: Components ✅

- [x] Created `src/components/SAP/SAPECCModules.tsx` - Home page ECC section
- [x] Created `src/components/SAP/SAPS4HANAModules.tsx` - Home page S/4 HANA section

## Phase 3: Pages ✅

- [x] Created `src/app/sap-ecc/page.tsx` - New ECC courses page
- [x] Created `src/app/sap-s4hana/page.tsx` - New S/4 HANA courses page
- [x] Created `src/app/sap-ecc/[courseId]/page.tsx` - ECC course detail with conditional brochure
- [x] Created `src/app/sap-s4hana/[courseId]/page.tsx` - S/4 HANA course detail with conditional brochure
- [x] Updated home page components to link correctly

## Phase 4: Navigation ✅

- [x] Updated `src/components/Header/menuData.tsx`
  - Removed SAP Functional and SAP Technical
  - Added Courses dropdown with ECC and S/4 HANA options

## Phase 5: Build Verification ✅

- [x] Build successful with all new routes
