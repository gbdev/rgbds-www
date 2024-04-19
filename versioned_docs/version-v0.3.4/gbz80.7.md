# gbz80(7) — CPU opcode reference

import generated from '!!raw-loader!./gbz80.7.html';

<div className="manual-text" dangerouslySetInnerHTML={{ __html: generated }} />

export const toc = [
{
	"value": "DESCRIPTION",
	"id": "DESCRIPTION",
	"level": 2,
},
{
	"value": "LEGEND",
	"id": "LEGEND",
	"level": 2,
},
{
	"value": "INSTRUCTION OVERVIEW",
	"id": "INSTRUCTION_OVERVIEW",
	"level": 2,
},
{
	"value": "8-bit Arithmetic and Logic Instructions",
	"id": "8-bit_Arithmetic_and_Logic_Instructions",
	"level": 3,
},
{
	"value": "16-bit Arithmetic Instructions",
	"id": "16-bit_Arithmetic_Instructions",
	"level": 3,
},
{
	"value": "Bit Operations Instructions",
	"id": "Bit_Operations_Instructions",
	"level": 3,
},
{
	"value": "Bit Shift Instructions",
	"id": "Bit_Shift_Instructions",
	"level": 3,
},
{
	"value": "Load Instructions",
	"id": "Load_Instructions",
	"level": 3,
},
{
	"value": "Jumps and Subroutines",
	"id": "Jumps_and_Subroutines",
	"level": 3,
},
{
	"value": "Stack Operations Instructions",
	"id": "Stack_Operations_Instructions",
	"level": 3,
},
{
	"value": "Miscellaneous Instructions",
	"id": "Miscellaneous_Instructions",
	"level": 3,
},
{
	"value": "INSTRUCTION REFERENCE",
	"id": "INSTRUCTION_REFERENCE",
	"level": 2,
},
{
	"value": "ADC A,r8",
	"id": "ADC_A,r8",
	"level": 3,
},
{
	"value": "ADC A,[HL]",
	"id": "ADC_A,_HL_",
	"level": 3,
},
{
	"value": "ADC A,n8",
	"id": "ADC_A,n8",
	"level": 3,
},
{
	"value": "ADD A,r8",
	"id": "ADD_A,r8",
	"level": 3,
},
{
	"value": "ADD A,[HL]",
	"id": "ADD_A,_HL_",
	"level": 3,
},
{
	"value": "ADD A,n8",
	"id": "ADD_A,n8",
	"level": 3,
},
{
	"value": "ADD HL,r16",
	"id": "ADD_HL,r16",
	"level": 3,
},
{
	"value": "ADD HL,SP",
	"id": "ADD_HL,SP",
	"level": 3,
},
{
	"value": "ADD SP,e8",
	"id": "ADD_SP,e8",
	"level": 3,
},
{
	"value": "AND A,r8",
	"id": "AND_A,r8",
	"level": 3,
},
{
	"value": "AND A,[HL]",
	"id": "AND_A,_HL_",
	"level": 3,
},
{
	"value": "AND A,n8",
	"id": "AND_A,n8",
	"level": 3,
},
{
	"value": "BIT u3,r8",
	"id": "BIT_u3,r8",
	"level": 3,
},
{
	"value": "BIT u3,[HL]",
	"id": "BIT_u3,_HL_",
	"level": 3,
},
{
	"value": "CALL n16",
	"id": "CALL_n16",
	"level": 3,
},
{
	"value": "CALL cc,n16",
	"id": "CALL_cc,n16",
	"level": 3,
},
{
	"value": "CCF",
	"id": "CCF",
	"level": 3,
},
{
	"value": "CP A,r8",
	"id": "CP_A,r8",
	"level": 3,
},
{
	"value": "CP A,[HL]",
	"id": "CP_A,_HL_",
	"level": 3,
},
{
	"value": "CP A,n8",
	"id": "CP_A,n8",
	"level": 3,
},
{
	"value": "CPL",
	"id": "CPL",
	"level": 3,
},
{
	"value": "DAA",
	"id": "DAA",
	"level": 3,
},
{
	"value": "DEC r8",
	"id": "DEC_r8",
	"level": 3,
},
{
	"value": "DEC [HL]",
	"id": "DEC__HL_",
	"level": 3,
},
{
	"value": "DEC r16",
	"id": "DEC_r16",
	"level": 3,
},
{
	"value": "DEC SP",
	"id": "DEC_SP",
	"level": 3,
},
{
	"value": "DI",
	"id": "DI",
	"level": 3,
},
{
	"value": "EI",
	"id": "EI",
	"level": 3,
},
{
	"value": "HALT",
	"id": "HALT",
	"level": 3,
},
{
	"value": "INC r8",
	"id": "INC_r8",
	"level": 3,
},
{
	"value": "INC [HL]",
	"id": "INC__HL_",
	"level": 3,
},
{
	"value": "INC r16",
	"id": "INC_r16",
	"level": 3,
},
{
	"value": "INC SP",
	"id": "INC_SP",
	"level": 3,
},
{
	"value": "JP n16",
	"id": "JP_n16",
	"level": 3,
},
{
	"value": "JP cc,n16",
	"id": "JP_cc,n16",
	"level": 3,
},
{
	"value": "JP HL",
	"id": "JP_HL",
	"level": 3,
},
{
	"value": "JR e8",
	"id": "JR_e8",
	"level": 3,
},
{
	"value": "JR cc,e8",
	"id": "JR_cc,e8",
	"level": 3,
},
{
	"value": "LD r8,r8",
	"id": "LD_r8,r8",
	"level": 3,
},
{
	"value": "LD r8,n8",
	"id": "LD_r8,n8",
	"level": 3,
},
{
	"value": "LD r16,n16",
	"id": "LD_r16,n16",
	"level": 3,
},
{
	"value": "LD [HL],r8",
	"id": "LD__HL_,r8",
	"level": 3,
},
{
	"value": "LD [HL],n8",
	"id": "LD__HL_,n8",
	"level": 3,
},
{
	"value": "LD r8,[HL]",
	"id": "LD_r8,_HL_",
	"level": 3,
},
{
	"value": "LD [r16],A",
	"id": "LD__r16_,A",
	"level": 3,
},
{
	"value": "LD [n16],A",
	"id": "LD__n16_,A",
	"level": 3,
},
{
	"value": "LD [$FF00+n8],A",
	"id": "LD__$FF00+n8_,A",
	"level": 3,
},
{
	"value": "LD [$FF00+C],A",
	"id": "LD__$FF00+C_,A",
	"level": 3,
},
{
	"value": "LD A,[r16]",
	"id": "LD_A,_r16_",
	"level": 3,
},
{
	"value": "LD A,[n16]",
	"id": "LD_A,_n16_",
	"level": 3,
},
{
	"value": "LD A,[$FF00+n8]",
	"id": "LD_A,_$FF00+n8_",
	"level": 3,
},
{
	"value": "LD A,[$FF00+C]",
	"id": "LD_A,_$FF00+C_",
	"level": 3,
},
{
	"value": "LD [HL+],A",
	"id": "LD__HL+_,A",
	"level": 3,
},
{
	"value": "LD [HL-],A",
	"id": "LD__HL-_,A",
	"level": 3,
},
{
	"value": "LD A,[HL+]",
	"id": "LD_A,_HL+_",
	"level": 3,
},
{
	"value": "LD A,[HL-]",
	"id": "LD_A,_HL-_",
	"level": 3,
},
{
	"value": "LD SP,n16",
	"id": "LD_SP,n16",
	"level": 3,
},
{
	"value": "LD [n16],SP",
	"id": "LD__n16_,SP",
	"level": 3,
},
{
	"value": "LD HL,SP+e8",
	"id": "LD_HL,SP+e8",
	"level": 3,
},
{
	"value": "LD SP,HL",
	"id": "LD_SP,HL",
	"level": 3,
},
{
	"value": "NOP",
	"id": "NOP",
	"level": 3,
},
{
	"value": "OR A,r8",
	"id": "OR_A,r8",
	"level": 3,
},
{
	"value": "OR A,[HL]",
	"id": "OR_A,_HL_",
	"level": 3,
},
{
	"value": "OR A,n8",
	"id": "OR_A,n8",
	"level": 3,
},
{
	"value": "POP AF",
	"id": "POP_AF",
	"level": 3,
},
{
	"value": "POP r16",
	"id": "POP_r16",
	"level": 3,
},
{
	"value": "PUSH AF",
	"id": "PUSH_AF",
	"level": 3,
},
{
	"value": "PUSH r16",
	"id": "PUSH_r16",
	"level": 3,
},
{
	"value": "RES u3,r8",
	"id": "RES_u3,r8",
	"level": 3,
},
{
	"value": "RES u3,[HL]",
	"id": "RES_u3,_HL_",
	"level": 3,
},
{
	"value": "RET",
	"id": "RET",
	"level": 3,
},
{
	"value": "RET cc",
	"id": "RET_cc",
	"level": 3,
},
{
	"value": "RETI",
	"id": "RETI",
	"level": 3,
},
{
	"value": "RL r8",
	"id": "RL_r8",
	"level": 3,
},
{
	"value": "RL [HL]",
	"id": "RL__HL_",
	"level": 3,
},
{
	"value": "RLA",
	"id": "RLA",
	"level": 3,
},
{
	"value": "RLC r8",
	"id": "RLC_r8",
	"level": 3,
},
{
	"value": "RLC [HL]",
	"id": "RLC__HL_",
	"level": 3,
},
{
	"value": "RLCA",
	"id": "RLCA",
	"level": 3,
},
{
	"value": "RR r8",
	"id": "RR_r8",
	"level": 3,
},
{
	"value": "RR [HL]",
	"id": "RR__HL_",
	"level": 3,
},
{
	"value": "RRA",
	"id": "RRA",
	"level": 3,
},
{
	"value": "RRC r8",
	"id": "RRC_r8",
	"level": 3,
},
{
	"value": "RRC [HL]",
	"id": "RRC__HL_",
	"level": 3,
},
{
	"value": "RRCA",
	"id": "RRCA",
	"level": 3,
},
{
	"value": "RST vec",
	"id": "RST_vec",
	"level": 3,
},
{
	"value": "SBC A,r8",
	"id": "SBC_A,r8",
	"level": 3,
},
{
	"value": "SBC A,[HL]",
	"id": "SBC_A,_HL_",
	"level": 3,
},
{
	"value": "SBC A,n8",
	"id": "SBC_A,n8",
	"level": 3,
},
{
	"value": "SCF",
	"id": "SCF",
	"level": 3,
},
{
	"value": "SET u3,r8",
	"id": "SET_u3,r8",
	"level": 3,
},
{
	"value": "SET u3,[HL]",
	"id": "SET_u3,_HL_",
	"level": 3,
},
{
	"value": "SLA r8",
	"id": "SLA_r8",
	"level": 3,
},
{
	"value": "SLA [HL]",
	"id": "SLA__HL_",
	"level": 3,
},
{
	"value": "SRA r8",
	"id": "SRA_r8",
	"level": 3,
},
{
	"value": "SRA [HL]",
	"id": "SRA__HL_",
	"level": 3,
},
{
	"value": "SRL r8",
	"id": "SRL_r8",
	"level": 3,
},
{
	"value": "SRL [HL]",
	"id": "SRL__HL_",
	"level": 3,
},
{
	"value": "STOP",
	"id": "STOP",
	"level": 3,
},
{
	"value": "SUB A,r8",
	"id": "SUB_A,r8",
	"level": 3,
},
{
	"value": "SUB A,[HL]",
	"id": "SUB_A,_HL_",
	"level": 3,
},
{
	"value": "SUB A,n8",
	"id": "SUB_A,n8",
	"level": 3,
},
{
	"value": "SWAP r8",
	"id": "SWAP_r8",
	"level": 3,
},
{
	"value": "SWAP [HL]",
	"id": "SWAP__HL_",
	"level": 3,
},
{
	"value": "XOR A,r8",
	"id": "XOR_A,r8",
	"level": 3,
},
{
	"value": "XOR A,[HL]",
	"id": "XOR_A,_HL_",
	"level": 3,
},
{
	"value": "XOR A,n8",
	"id": "XOR_A,n8",
	"level": 3,
},
{
	"value": "SEE ALSO",
	"id": "SEE_ALSO",
	"level": 2,
},
{
	"value": "HISTORY",
	"id": "HISTORY",
	"level": 2,
},
];
