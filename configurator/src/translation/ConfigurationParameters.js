export const Int = "Int"
export const RadioParameter = "Radio"

export const ConfigurationParameters = [
    {
        macroType: "m4_def",
        readableName: "CPU cores",
        verilogName: "NUM_CORES",
        defaultValue: 1,
        jsonKey: "cores",
        type: Int,
        validator: (input) => input >= 0,
        configurationCategory: "CPU",
        description: "Number of cores"
    },
    {
        macroType: "m4_def",
        readableName: "VCs",
        verilogName: "NUM_VCS",
        defaultValue: 2,
        jsonKey: "vcs",
        type: Int,
        validator: (input) => input >= 0,
        configurationCategory: "CPU",
        description: "VCs (meaningful if > 1 core)"
    },
    {
        macroType: "m4_def",
        readableName: "Priority levels",
        verilogName: "NUM_PRIOS",
        defaultValue: 2,
        jsonKey: "prios",
        type: Int,
        validator: (input) => input >= 0,
        configurationCategory: "CPU",
        description: "Number of priority levels in the NoC"
    },
    {
        macroType: "m4_def",
        readableName: "Max Packet Size",
        verilogName: "MAX_PACKET_SIZE",
        defaultValue: 8,
        jsonKey: "max_packet_size",
        type: Int,
        validator: (input) => input >= 0,
        configurationCategory: "CPU",
        description: "Max number of payload flits in a packet"
    },
   /* {
        macroType: "m4_def",
        readableName: "Implementation vs Simulation - true for implementation",
        verilogName: "IMPL",
        defaultValue: true,
        jsonKey: "impl",
        type: Boolean,
        configurationCategory: "CPU",
        description: "For implementation (vs. simulation)"
    },*/
    {
        macroType: "m4_def",
        readableName: "Soft reset",
        verilogName: "soft_reset",
        defaultValue: true,
        jsonKey: "soft_reset",
        type: Boolean,
        configurationCategory: "CPU",
        description: "A hook for a software-controlled reset. None by default"
    },
    {
        macroType: "m4_def",
        readableName: "CPU Blocked?",
        verilogName: "cpu_blocked",
        defaultValue: false,
        jsonKey: "cpu_blocked",
        type: Boolean,
        configurationCategory: "CPU",
        description: "A hook for CPU back-pressure in M4_REG_RD_STAGE. Various sources of back-pressure can add to this expression."
    },
    {
        macroType: "m4_def",
        readableName: "Branch prediction?",
        verilogName: "BRANCH_PRED",
        defaultValue: "fallthrough",
        jsonKey: "branch_pred",
        type: RadioParameter,
        possibleValues: ["fallthrough", "two_bit"],
        validator: (input, setting) => setting.possibleValues.includes(input),
        configurationCategory: "CPU",
        description: "A hook for CPU back-pressure in M4_REG_RD_STAGE. Various sources of back-pressure can add to this expression. two_bit or fallthrough"
    },
    {
        macroType: "m4_def",
        readableName: "EXTRA_REPLAY_BUBBLE",
        verilogName: "EXTRA_REPLAY_BUBBLE",
        defaultValue: 0,
        jsonKey: "extra_replay_bubble",
        type: Int,
        max: 1,
        configurationCategory: "CPU",
    },
    {
        macroType: "m4_def",
        readableName: "EXTRA_PRED_TAKEN_BUBBLE",
        verilogName: "EXTRA_PRED_TAKEN_BUBBLE",
        defaultValue: 0,
        jsonKey: "extra_pred_taken_bubble",
        type: Int,
        max: 1,
        configurationCategory: "CPU",
    },
    {
        macroType: "m4_def",
        readableName: "EXTRA_JUMP_BUBBLE",
        verilogName: "EXTRA_JUMP_BUBBLE",
        defaultValue: 0,
        jsonKey: "extra_jump_bubble",
        type: Int,
        max: 1,
        configurationCategory: "CPU",
    },
    {
        macroType: "m4_def",
        readableName: "EXTRA_BRANCH_BUBBLE",
        verilogName: "EXTRA_BRANCH_BUBBLE",
        defaultValue: 0,
        jsonKey: "extra_branch_bubble",
        type: Int,
        max: 1,
        configurationCategory: "CPU",
    },
    {
        macroType: "m4_def",
        readableName: "EXTRA_INDIRECT_JUMP_BUBBLE",
        verilogName: "EXTRA_INDIRECT_JUMP_BUBBLE",
        defaultValue: 0,
        jsonKey: "extra_indirect_jump_bubble",
        type: Int,
        max: 1,
        configurationCategory: "CPU",
    },
    {
        macroType: "m4_def",
        readableName: "EXTRA_NON_PIPELINED_BUBBLE",
        verilogName: "EXTRA_NON_PIPELINED_BUBBLE",
        defaultValue: 0,
        jsonKey: "extra_non_pipelined_bubble",
        type: Int,
        max: 1,
        configurationCategory: "CPU",
    },
    {
        macroType: "m4_def",
        readableName: "EXTRA_TRAP_BUBBLE",
        verilogName: "EXTRA_TRAP_BUBBLE",
        defaultValue: 0,
        jsonKey: "extra_trap_bubble",
        type: Int,
        max: 1,
        configurationCategory: "CPU",
    },
    {
        macroType: "m4_def",
        readableName: "Next PC Stage",
        verilogName: "NEXT_PC_STAGE",
        defaultValue: 0,
        jsonKey: "next_pc_stage",
        type: Int,
        validator: (input) => input >= 0,
        configurationCategory: "CPU",
        description: "Determining fetch PC for the NEXT instruction (not this one)."
    },
    {
        macroType: "m4_def",
        readableName: "Fetch Stage",
        verilogName: "FETCH_STAGE",
        defaultValue: 0,
        jsonKey: "fetch_stage",
        type: Int,
        validator: (input) => input >= 0,
        configurationCategory: "CPU",
        description: "Instruction fetch."
    },
    {
        macroType: "m4_def",
        readableName: "Decode Stage",
        verilogName: "DECODE_STAGE",
        defaultValue: 0,
        jsonKey: "decode_stage",
        type: Int,
        validator: (input) => input >= 0,
        configurationCategory: "CPU",
        description: "Instruction decode."
    },
    {
        macroType: "m4_def",
        readableName: "Branch Prediction Stage",
        verilogName: "BRANCH_PRED_STAGE",
        defaultValue: 0,
        jsonKey: "branch_pred_stage",
        type: Int,
        validator: (input) => input >= 0,
        configurationCategory: "CPU",
        description: "Branch predict (taken/not-taken). Currently, we mispredict to a known branch target, so branch prediction is only relevant if target is computed before taken/not-taken is known. For other ISAs prediction is forced to fallthrough, and there is no pred-taken redirect."
    },
    {
        macroType: "m4_def",
        readableName: "Register Read Stage",
        verilogName: "REG_RD_STAGE",
        defaultValue: 0,
        jsonKey: "register_rd_stage",
        type: Int,
        validator: (input) => input >= 0,
        configurationCategory: "CPU",
        description: "Register file read"
    },
    {
        macroType: "m4_def",
        readableName: "Execute Stage",
        verilogName: "EXECUTE_STAGE",
        defaultValue: 0,
        jsonKey: "execute_stage",
        type: Int,
        validator: (input) => input >= 0,
        configurationCategory: "CPU",
        description: "Operation execution."
    },
    {
        macroType: "m4_def",
        readableName: "Result Stage",
        verilogName: "RESULT_STAGE",
        defaultValue: 0,
        jsonKey: "result_stage",
        type: Int,
        validator: (input) => input >= 0,
        configurationCategory: "CPU",
        description: "Select execution result."
    },
    {
        macroType: "m4_def",
        readableName: "Register Write Stage",
        verilogName: "REG_WR_STAGE",
        defaultValue: 0,
        jsonKey: "register_wr_stage",
        type: Int,
        validator: (input) => input >= 0,
        configurationCategory: "CPU",
        description: "Register file write."
    },
    {
        macroType: "m4_def",
        readableName: "Memory Write Stage",
        verilogName: "MEM_WR_STAGE",
        defaultValue: 0,
        jsonKey: "mem_wr_stage",
        type: Int,
        validator: (input) => input >= 0,
        configurationCategory: "CPU",
        description: "Memory write."
    },
    {
        macroType: "m4_def",
        readableName: "LD Return Align",
        verilogName: "LD_RETURN_ALIGN",
        defaultValue: 0,
        jsonKey: "ld_return_align",
        type: Int,
        validator: (input) => input >= 0,
        configurationCategory: "CPU",
        description: "Alignment of load return pseudo-instruction into |mem pipeline. If |mem stages reflect nominal alignment w/ load instruction, this is the nominal load latency."
    },
]