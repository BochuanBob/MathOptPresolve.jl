var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = MathOptPresolve","category":"page"},{"location":"#MathOptPresolve","page":"Home","title":"MathOptPresolve","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [MathOptPresolve]","category":"page"},{"location":"#MathOptPresolve.PresolveData","page":"Home","title":"MathOptPresolve.PresolveData","text":"PresolveData{T}\n\nStores information about an LP in the form\n\n    min     c'x + c0\n    s.t.    lr ⩽ Ax ⩽ ur\n            lc ⩽  x ⩽ uc\n\nwhose dual writes\n\n    max     lr'y⁺ - ur'y⁻ + lc's⁺ - uc's⁻\n    s.t.     A'y⁺ -  A'y⁻ +    s⁺ -    s⁻ = c\n               y⁺,     y⁻,     s⁺,     s⁻ ⩾ 0\n\n\n\n\n\n","category":"type"},{"location":"#MathOptPresolve.PresolveTransformation","page":"Home","title":"MathOptPresolve.PresolveTransformation","text":"PresolveTransformation{T}\n\nAbstract type for pre-solve transformations.\n\n\n\n\n\n","category":"type"},{"location":"#MathOptPresolve.ProblemData","page":"Home","title":"MathOptPresolve.ProblemData","text":"ProblemData{T}\n\nData structure for storing problem data in precision T.\n\nThe LP is represented in canonical form\n\nbeginarrayrl\n    displaystyle min_x     c^T x + c_0 \n    st     l_r leq A x leq u_r \n     l_c leq x leq u_c\nendarray\n\n\n\n\n\n","category":"type"},{"location":"#MathOptPresolve.SolutionStatus","page":"Home","title":"MathOptPresolve.SolutionStatus","text":"SolutionStatus\n\nSolution Status code\n\nSln_Unknown: Unknown status\nSln_Optimal: The current solution is optimal.\nSln_FeasiblePoint: The current solution is feasible.\nSln_InfeasiblePoint: The current solution is not feasible.\nSln_InfeasibilityCertificate: The current solution is a certificate of   infeasibility. The primal solution is a certificate of dual infeasibility,   while the dual solution is a certificate of primal infeasibility.\n\n\n\n\n\n","category":"type"},{"location":"#MathOptPresolve.TerminationStatus","page":"Home","title":"MathOptPresolve.TerminationStatus","text":"TerminationStatus\n\nSuccess: No error occured\nPrimalInfeasibleNoResult: Problem is proved to be primal infeasible,   but no result (e.g. certificate of infeasibility) is available.\nDualInfeasibleNoResult: Problem is proved to be primal infeasible,\n\nbut no result (e.g. certificate of infeasibility) is available.\n\nIterationLimit: Maximum number of iterations reached.\nTimeLimit: Time limit reached.\nMemoryLimit: Memory limit reached.\nNumericalProblem: Numerical problem encountered, e.g. failure of the   Cholesky decomposition.\n\n\n\n\n\n","category":"type"},{"location":"#MathOptPresolve.bounds_consistency_checks!-Union{Tuple{MathOptPresolve.PresolveData{T}}, Tuple{T}} where T","page":"Home","title":"MathOptPresolve.bounds_consistency_checks!","text":"bounds_consistency_checks(ps)\n\nCheck that all primal & dual bounds are consistent.\n\nTODO: If not, declare primal/dual infeasibility and extract ray.\n\n\n\n\n\n","category":"method"},{"location":"#MathOptPresolve.load_problem!-Union{Tuple{T}, Tuple{MathOptPresolve.ProblemData{T},String,Bool,Array{T,1},T,SparseArrays.SparseMatrixCSC,Array{T,1},Array{T,1},Array{T,1},Array{T,1},Array{String,1},Array{String,1}}} where T","page":"Home","title":"MathOptPresolve.load_problem!","text":"load_problem!(pb, )\n\nLoad entire problem.\n\n\n\n\n\n","category":"method"},{"location":"#MathOptPresolve.postsolve!-Union{Tuple{T}, Tuple{MathOptPresolve.Solution{T},MathOptPresolve.Solution{T},MathOptPresolve.PresolveData{T}}} where T","page":"Home","title":"MathOptPresolve.postsolve!","text":"postsolve!\n\nPerform post-solve.\n\n\n\n\n\n","category":"method"},{"location":"#MathOptPresolve.presolve!-Union{Tuple{MathOptPresolve.PresolveData{T}}, Tuple{T}} where T","page":"Home","title":"MathOptPresolve.presolve!","text":"presolve(pb::ProblemData)\n\nPerform pre-solve.\n\n\n\n\n\n","category":"method"},{"location":"#MathOptPresolve.remove_empty_columns!-Union{Tuple{MathOptPresolve.PresolveData{T}}, Tuple{T}} where T","page":"Home","title":"MathOptPresolve.remove_empty_columns!","text":"remove_empty_columns!(ps::PresolveData)\n\nRemove all empty columns.\n\nCalled once at the beginning of the presolve procedure. If an empty column is created later, it is removed on the spot.\n\n\n\n\n\n","category":"method"},{"location":"#MathOptPresolve.remove_empty_rows!-Union{Tuple{MathOptPresolve.PresolveData{T}}, Tuple{T}} where T","page":"Home","title":"MathOptPresolve.remove_empty_rows!","text":"remove_empty_rows!(ps::PresolveData)\n\nRemove all empty rows.\n\nCalled once at the beginning of the presolve procedure. If an empty row is created later, it is removed on the spot.\n\n\n\n\n\n","category":"method"},{"location":"#MathOptPresolve.remove_fixed_variables!-Union{Tuple{MathOptPresolve.PresolveData{T}}, Tuple{T}} where T","page":"Home","title":"MathOptPresolve.remove_fixed_variables!","text":"remove_fixed_variables!(ps::PresolveData)\n\nRemove all fixed variables.\n\n\n\n\n\n","category":"method"},{"location":"#MathOptPresolve.remove_forcing_rows!-Tuple{MathOptPresolve.PresolveData}","page":"Home","title":"MathOptPresolve.remove_forcing_rows!","text":"remove_forcing_rows!\n\nRemove forcing and dominated row\n\n\n\n\n\n","category":"method"},{"location":"#MathOptPresolve.remove_free_column_singletons!-Tuple{MathOptPresolve.PresolveData}","page":"Home","title":"MathOptPresolve.remove_free_column_singletons!","text":"remove_free_column_singletons!(ps)\n\n\n\n\n\n","category":"method"}]
}