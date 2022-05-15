# gbz80(7) — CPU opcode reference uwu

import generated from '!!raw-loader!./gbz80.7.html';

<div className="manual-text" dangerouslySetInnerHTML={{ __html: generated }} />

export const toc = [
{
	"value": "DESCRIPTION",
	"id": "DESCRIPTION",
	"level": 2,
	"children": [
	]
},
{
	"value": "LEGEND",
	"id": "LEGEND",
	"level": 2,
	"children": [
	]
},
{
	"value": "INSTRUCTION OVERVIEW",
	"id": "INSTRUCTION_OVERVIEW",
	"level": 2,
	"children": [
{
	"value": "8-bit Math and Logic Doodads",
	"id": "8-bit_Math_and_Logic_Doodads",
	"level": 3,
	"children": [
	]
},
{
	"value": "16-bit Math Things",
	"id": "16-bit_Math_Things",
	"level": 3,
	"children": [
	]
},
{
	"value": "Bit Opurrations >=3c",
	"id": "Bit_Opurrations_>=3c",
	"level": 3,
	"children": [
	]
},
{
	"value": "Shifty Bit Stuff 👀",
	"id": "Shifty_Bit_Stuff_👀",
	"level": 3,
	"children": [
	]
},
{
	"value": "Load Stuff",
	"id": "Load_Stuff",
	"level": 3,
	"children": [
	]
},
{
	"value": "Jumps and Things",
	"id": "Jumps_and_Things",
	"level": 3,
	"children": [
	]
},
{
	"value": "Stack Operations Instwuctions uwu",
	"id": "Stack_Operations_Instwuctions_uwu",
	"level": 3,
	"children": [
	]
},
{
	"value": "Weird Instructions?? O_o",
	"id": "Weird_Instructions??_O_o",
	"level": 3,
	"children": [
	]
},
	]
},
{
	"value": "INSTRUCTION REFERENCE",
	"id": "INSTRUCTION_REFERENCE",
	"level": 2,
	"children": [
{
	"value": "ADC \&( •̀A•́),r8",
	"id": "ADC_\&(_•̀A•́),r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "ADC \&( •̀A•́),[н∠( ᐛ 」∠)＿]",
	"id": "ADC_\&(_•̀A•́),[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "ADC \&( •̀A•́),n8",
	"id": "ADC_\&(_•̀A•́),n8",
	"level": 3,
	"children": [
	]
},
{
	"value": "ADD \&( •̀A•́),r8",
	"id": "ADD_\&(_•̀A•́),r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "ADD \&( •̀A•́),[н∠( ᐛ 」∠)＿]",
	"id": "ADD_\&(_•̀A•́),[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "ADD \&( •̀A•́),n8",
	"id": "ADD_\&(_•̀A•́),n8",
	"level": 3,
	"children": [
	]
},
{
	"value": "ADD н∠( ᐛ 」∠)＿,r16",
	"id": "ADD_н∠(_ᐛ_」∠)＿,r16",
	"level": 3,
	"children": [
	]
},
{
	"value": "ADD н∠( ᐛ 」∠)＿,SP",
	"id": "ADD_н∠(_ᐛ_」∠)＿,SP",
	"level": 3,
	"children": [
	]
},
{
	"value": "ADD SP,e8",
	"id": "ADD_SP,e8",
	"level": 3,
	"children": [
	]
},
{
	"value": "AND \&( •̀A•́),r8",
	"id": "AND_\&(_•̀A•́),r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "AND \&( •̀A•́),[н∠( ᐛ 」∠)＿]",
	"id": "AND_\&(_•̀A•́),[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "AND \&( •̀A•́),n8",
	"id": "AND_\&(_•̀A•́),n8",
	"level": 3,
	"children": [
	]
},
{
	"value": "BIT u3,r8",
	"id": "BIT_u3,r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "BIT u3,[н∠( ᐛ 」∠)＿]",
	"id": "BIT_u3,[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "CALL n16",
	"id": "CALL_n16",
	"level": 3,
	"children": [
	]
},
{
	"value": "CALL cc,n16",
	"id": "CALL_cc,n16",
	"level": 3,
	"children": [
	]
},
{
	"value": "CCF",
	"id": "CCF",
	"level": 3,
	"children": [
	]
},
{
	"value": "CP \&( •̀A•́),r8",
	"id": "CP_\&(_•̀A•́),r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "CP \&( •̀A•́),[н∠( ᐛ 」∠)＿]",
	"id": "CP_\&(_•̀A•́),[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "CP \&( •̀A•́),n8",
	"id": "CP_\&(_•̀A•́),n8",
	"level": 3,
	"children": [
	]
},
{
	"value": "CPL",
	"id": "CPL",
	"level": 3,
	"children": [
	]
},
{
	"value": "DAA",
	"id": "DAA",
	"level": 3,
	"children": [
	]
},
{
	"value": "DEC r8",
	"id": "DEC_r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "DEC [н∠( ᐛ 」∠)＿]",
	"id": "DEC_[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "DEC r16",
	"id": "DEC_r16",
	"level": 3,
	"children": [
	]
},
{
	"value": "DEC SP",
	"id": "DEC_SP",
	"level": 3,
	"children": [
	]
},
{
	"value": "DI",
	"id": "DI",
	"level": 3,
	"children": [
	]
},
{
	"value": "EI",
	"id": "EI",
	"level": 3,
	"children": [
	]
},
{
	"value": "HALT✋",
	"id": "HALT✋",
	"level": 3,
	"children": [
	]
},
{
	"value": "INC r8",
	"id": "INC_r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "INC [н∠( ᐛ 」∠)＿]",
	"id": "INC_[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "INC r16",
	"id": "INC_r16",
	"level": 3,
	"children": [
	]
},
{
	"value": "INC SP",
	"id": "INC_SP",
	"level": 3,
	"children": [
	]
},
{
	"value": "JP n16",
	"id": "JP_n16",
	"level": 3,
	"children": [
	]
},
{
	"value": "JP cc,n16",
	"id": "JP_cc,n16",
	"level": 3,
	"children": [
	]
},
{
	"value": "JP н∠( ᐛ 」∠)＿",
	"id": "JP_н∠(_ᐛ_」∠)＿",
	"level": 3,
	"children": [
	]
},
{
	"value": "JR e8",
	"id": "JR_e8",
	"level": 3,
	"children": [
	]
},
{
	"value": "JR cc,e8",
	"id": "JR_cc,e8",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD r8,r8",
	"id": "LD_r8,r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD r8,n8",
	"id": "LD_r8,n8",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD r16,n16",
	"id": "LD_r16,n16",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD [н∠( ᐛ 」∠)＿],r8",
	"id": "LD_[н∠(_ᐛ_」∠)＿],r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD [н∠( ᐛ 」∠)＿],n8",
	"id": "LD_[н∠(_ᐛ_」∠)＿],n8",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD r8,[н∠( ᐛ 」∠)＿]",
	"id": "LD_r8,[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD [r16],\&( •̀A•́)",
	"id": "LD_[r16],\&(_•̀A•́)",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD [n16],\&( •̀A•́)",
	"id": "LD_[n16],\&(_•̀A•́)",
	"level": 3,
	"children": [
	]
},
{
	"value": "LDH [n16],\&( •̀A•́)",
	"id": "LDH_[n16],\&(_•̀A•́)",
	"level": 3,
	"children": [
	]
},
{
	"value": "LDH [♥(˘⌣˘ C)],\&( •̀A•́)",
	"id": "LDH_[♥(˘⌣˘_C)],\&(_•̀A•́)",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD \&( •̀A•́),[r16]",
	"id": "LD_\&(_•̀A•́),[r16]",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD \&( •̀A•́),[n16]",
	"id": "LD_\&(_•̀A•́),[n16]",
	"level": 3,
	"children": [
	]
},
{
	"value": "LDH \&( •̀A•́),[n16]",
	"id": "LDH_\&(_•̀A•́),[n16]",
	"level": 3,
	"children": [
	]
},
{
	"value": "LDH \&( •̀A•́),[♥(˘⌣˘ C)]",
	"id": "LDH_\&(_•̀A•́),[♥(˘⌣˘_C)]",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD [н∠( ᐛ 」∠)＿👁],\&( •̀A•́)",
	"id": "LD_[н∠(_ᐛ_」∠)＿👁],\&(_•̀A•́)",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD [н∠( ᐛ 」∠)＿👎],\&( •̀A•́)",
	"id": "LD_[н∠(_ᐛ_」∠)＿👎],\&(_•̀A•́)",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD \&( •̀A•́),[н∠( ᐛ 」∠)＿👎]",
	"id": "LD_\&(_•̀A•́),[н∠(_ᐛ_」∠)＿👎]",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD \&( •̀A•́),[н∠( ᐛ 」∠)＿👁]",
	"id": "LD_\&(_•̀A•́),[н∠(_ᐛ_」∠)＿👁]",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD SP,n16",
	"id": "LD_SP,n16",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD [n16],SP",
	"id": "LD_[n16],SP",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD н∠( ᐛ 」∠)＿,SP+e8",
	"id": "LD_н∠(_ᐛ_」∠)＿,SP+e8",
	"level": 3,
	"children": [
	]
},
{
	"value": "LD SP,н∠( ᐛ 」∠)＿",
	"id": "LD_SP,н∠(_ᐛ_」∠)＿",
	"level": 3,
	"children": [
	]
},
{
	"value": "NOPE",
	"id": "NOPE",
	"level": 3,
	"children": [
	]
},
{
	"value": "OR \&( •̀A•́),r8",
	"id": "OR_\&(_•̀A•́),r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "OR \&( •̀A•́),[н∠( ᐛ 」∠)＿]",
	"id": "OR_\&(_•̀A•́),[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "OR \&( •̀A•́),n8",
	"id": "OR_\&(_•̀A•́),n8",
	"level": 3,
	"children": [
	]
},
{
	"value": "OWO",
	"id": "OWO",
	"level": 3,
	"children": [
	]
},
{
	"value": "POP \&( •̀A•́)𝓕𝓾𝓬𝓴",
	"id": "POP_\&(_•̀A•́)𝓕𝓾𝓬𝓴",
	"level": 3,
	"children": [
	]
},
{
	"value": "POP r16",
	"id": "POP_r16",
	"level": 3,
	"children": [
	]
},
{
	"value": "PUSH \&( •̀A•́)𝓕𝓾𝓬𝓴",
	"id": "PUSH_\&(_•̀A•́)𝓕𝓾𝓬𝓴",
	"level": 3,
	"children": [
	]
},
{
	"value": "PUSH r16",
	"id": "PUSH_r16",
	"level": 3,
	"children": [
	]
},
{
	"value": "RES u3,r8",
	"id": "RES_u3,r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "RES u3,[н∠( ᐛ 」∠)＿]",
	"id": "RES_u3,[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "RET",
	"id": "RET",
	"level": 3,
	"children": [
	]
},
{
	"value": "RET cc",
	"id": "RET_cc",
	"level": 3,
	"children": [
	]
},
{
	"value": "RETI",
	"id": "RETI",
	"level": 3,
	"children": [
	]
},
{
	"value": "RL r8",
	"id": "RL_r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "RL [н∠( ᐛ 」∠)＿]",
	"id": "RL_[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "RLA",
	"id": "RLA",
	"level": 3,
	"children": [
	]
},
{
	"value": "RLC r8",
	"id": "RLC_r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "RLC [н∠( ᐛ 」∠)＿]",
	"id": "RLC_[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "RLCA",
	"id": "RLCA",
	"level": 3,
	"children": [
	]
},
{
	"value": "RR r8",
	"id": "RR_r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "RR [н∠( ᐛ 」∠)＿]",
	"id": "RR_[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "RRA",
	"id": "RRA",
	"level": 3,
	"children": [
	]
},
{
	"value": "RRC r8",
	"id": "RRC_r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "RRC [н∠( ᐛ 」∠)＿]",
	"id": "RRC_[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "RRCA",
	"id": "RRCA",
	"level": 3,
	"children": [
	]
},
{
	"value": "RST vec",
	"id": "RST_vec",
	"level": 3,
	"children": [
	]
},
{
	"value": "SBC \&( •̀A•́),r8",
	"id": "SBC_\&(_•̀A•́),r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "SBC \&( •̀A•́),[н∠( ᐛ 」∠)＿]",
	"id": "SBC_\&(_•̀A•́),[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "SBC \&( •̀A•́),n8",
	"id": "SBC_\&(_•̀A•́),n8",
	"level": 3,
	"children": [
	]
},
{
	"value": "SCF",
	"id": "SCF",
	"level": 3,
	"children": [
	]
},
{
	"value": "SET u3,r8",
	"id": "SET_u3,r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "SET u3,[н∠( ᐛ 」∠)＿]",
	"id": "SET_u3,[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "SLA r8",
	"id": "SLA_r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "SLA [н∠( ᐛ 」∠)＿]",
	"id": "SLA_[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "SRA r8",
	"id": "SRA_r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "SRA [н∠( ᐛ 」∠)＿]",
	"id": "SRA_[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "SRL r8",
	"id": "SRL_r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "SRL [н∠( ᐛ 」∠)＿]",
	"id": "SRL_[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "STOP!!🛑",
	"id": "STOP!!🛑",
	"level": 3,
	"children": [
	]
},
{
	"value": "SUB \&( •̀A•́),r8",
	"id": "SUB_\&(_•̀A•́),r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "SUB \&( •̀A•́),[н∠( ᐛ 」∠)＿]",
	"id": "SUB_\&(_•̀A•́),[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "SUB \&( •̀A•́),n8",
	"id": "SUB_\&(_•̀A•́),n8",
	"level": 3,
	"children": [
	]
},
{
	"value": "SWAP r8",
	"id": "SWAP_r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "SWAP [н∠( ᐛ 」∠)＿]",
	"id": "SWAP_[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "XOR \&( •̀A•́),r8",
	"id": "XOR_\&(_•̀A•́),r8",
	"level": 3,
	"children": [
	]
},
{
	"value": "XOR \&( •̀A•́),[н∠( ᐛ 」∠)＿]",
	"id": "XOR_\&(_•̀A•́),[н∠(_ᐛ_」∠)＿]",
	"level": 3,
	"children": [
	]
},
{
	"value": "XOR \&( •̀A•́),n8",
	"id": "XOR_\&(_•̀A•́),n8",
	"level": 3,
	"children": [
	]
},
	]
},
{
	"value": "SEE ALSO",
	"id": "SEE_ALSO",
	"level": 2,
	"children": [
	]
},
{
	"value": "HISTORY",
	"id": "HISTORY",
	"level": 2,
	"children": [
	]
},
];
